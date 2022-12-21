import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from "@chakra-ui/react";
import {FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from "react-icons/bs";
import {FiKey} from 'react-icons/fi';

const NavBar = () => {
    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
            <Box fontSize="3xl" color="blue.400" fontWeight="bold">
                <Link href="/" paddingleft="2">RealTor</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu></FcMenu>} variant="outline" color="red.400"></MenuButton>
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome></FcHome>}>Inicio</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<BsSearch></BsSearch>}>Buscar</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout></FcAbout>}>Comprar Propiedad</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey></FiKey>}>Alquilar Propiedad</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}

export default NavBar;