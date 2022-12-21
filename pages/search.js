import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import {BsFilter} from 'react-icons/bs';
import { fetchAPI, baseUrl } from "../utils/fetchAPI";
import SearchFilters from "../components/SearchFilters";
import Property from '../components/Property';
import noresults from '../assets/images/noresult.svg';

const search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();
    var propiedad = "";

    if(router.query.purpose === 'for-rent'){
        propiedad = "en Alquiler";
    }else if(router.query.purpose === 'for-sale'){
        propiedad = "en Venta";
    }

    return (
        <Box>
            <Flex cursor="pointer" bg="gray.100" borderBottom={1} borderColor="gray.200" p={2} fontWeight="black" fontSize="lg" justifyContent="center" textAlign="center" onClick={() => setSearchFilters((prevFilters) => !prevFilters )}>
                <Text>Buscar Propiedad por Filtros</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
            </Flex>
            {searchFilters && <SearchFilters></SearchFilters>}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                {/* Propiedades {router.query.purpose} */}
                Propiedades {propiedad}
            </Text>
            <Flex flexWrap="wrap">
                {properties.map((property) => <Property property={property} key={property.id}></Property>)}
            </Flex>
            {properties.length === 0 && (<Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                <Image alt="Sin resultados" src={noresults}></Image>
                <Text fontSize="2xl" marginTop={3}>No se encontraron resultados</Text>
            </Flex>)}
        </Box>     
    );                       
}

export async function getServerSideProps({query}) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchAPI(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

	return {
		props: {
			properties: data?.hits,
		}
	}
}

export default search;