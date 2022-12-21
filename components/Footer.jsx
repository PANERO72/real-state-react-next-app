import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
           <Text fontSize="small">&copy; 2022 - RealTor, Inc | Todos los derechos resevardos.</Text>
        </Box>
    );
}

export default Footer;