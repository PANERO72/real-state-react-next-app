import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { baseUrl, fetchAPI } from '../utils/fetchAPI';
import Property from '../components/Property';

// import { Inter } from '@next/font/google';
// import styles from '../styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] })

const Banner = ({imageUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText}) => (
	<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
		<Image src={imageUrl} width={500} height={300} priority={true} loading="eager" alt="Imagen del Banner"/>
		<Box p="5">
			<Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
			<Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
			<Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
			<Button fontSize="medium" color="white" colorScheme="blue">
				<Link href={linkName}>{buttonText}</Link>
			</Button>
		</Box>
	</Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) {
	return (
		<>
			<Box>
				<Banner purpose="ALQUILAR UNA CASA" title1="Viviendas de Alquiler para" title2="Todo el mundo" desc1="Explorar Apartamentos, Villas, Casas, Chalets" desc2="y más" buttonText="Ver en Alquiler..." linkName="/search?purpose=for-rent" imageUrl="/images/rent_house.jpg"></Banner>
				<Flex flexWrap="wrap">
					{propertiesForRent.map((property) => <Property property={property} key={property.id}></Property>)}
				</Flex>
				<Banner purpose="COMPRAR UNA CASA" title1="Encuentre, compre y sea el Dueño" title2="de la Casa de sus Sueños" desc1="Explorar Apartamentos, Villas, Casas, Chalets" desc2="y más" buttonText="Ver en Venta..." linkName="/search?purpose=for-sale" imageUrl="/images/buy_house.jpg"></Banner>
				<Flex flexWrap="wrap">
					{propertiesForSale.map((property) => <Property property={property} key={property.id}></Property>)}
				</Flex>
			</Box>
		</>
	)
}

export async function getStaticProps() {
	const propertyForSale = await fetchAPI(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6&lang=en`);
	const propertyForRent = await fetchAPI(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6&lang=en`);

	return {
		props: {
			propertiesForSale: propertyForSale?.hits, propertiesForRent: propertyForRent?.hits
		}
	}
}
