import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box
                    mr="4"
                    textAlign="right"
                >
                    <Text>Guilherme Fadel</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        gfadelt@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Guilherme Fadel" />
        </Flex>
    );
}