import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar, Center } from "@chakra-ui/react";
import {FaBed, FaBath } from 'react-icons/fa';
import {GoVerified } from 'react-icons/go';
import { BsGridFill } from "react-icons/bs";
import millify from "millify";

import DefaultImage from '../assets/images/default_house.jpg';

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) =>(
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} priority={coverPhoto.url} height={260} alt="Imagen de la Propiedad"></Image>
            </Box>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified></GoVerified>}</Box>
                        <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems="center" p={2} justifyContent="space-between" w={250} color="blue.400">
                    {rooms} <FaBed></FaBed> | {baths} <FaBath></FaBath> | {millify(area)} pies<sup>2</sup> <BsGridFill></BsGridFill>
                </Flex>
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;