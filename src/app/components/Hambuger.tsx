import { Center, Box } from "@chakra-ui/react";

export default function Hamburger() {
    return (
        <div>
            <Center display="flex" justifyContent="center" flexDir="column">
                <Box h="3px" w="2em" bg="white" m="1"></Box>
                <Box h="3px" w="2em" bg="white" m="1"></Box>
                <Box h="3px" w="2em" bg="white" m="1"></Box>
            </Center>
        </div>
    );
}