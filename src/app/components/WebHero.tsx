import { Container, Box, Text } from "@chakra-ui/react";

export default function WebHero() {
    return (
        <main>
        <Container w="100vw" display={"flex"} justifyContent={"center"}>
            <div>
                <Box
                w="20em"
                bg="black"
                borderRadius={50}
                textAlign={"center"}
                >
                    <Text color={"white"} fontWeight={"bold"}>
                        CONTACT ME NOW
                    </Text>
                </Box>
            </div>

            <Box className="hero-text">
                <Text>Bespoke Web design & Development to</Text>
                {/* TYPEWRITER EFFECT */}
                <Text></Text>
            </Box>
        </Container>
        </main>
    );
}