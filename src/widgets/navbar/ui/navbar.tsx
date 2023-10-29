import { Box, Container, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { BalanceButton, ColorSwitcherButton, LogoutButton } from '@features';
import { AppLogo } from '@shared';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <Box as="header" bg={useColorModeValue('blue.600', 'blue.900')}>
            <Container maxW="container.xl" py={4} px={8}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Link to="/dashboard">
                        <AppLogo />
                    </Link>
                    <HStack spacing={4}>
                        <HStack>
                            <BalanceButton />
                        </HStack>
                        <HStack spacing={1}>
                            <ColorSwitcherButton />
                            <LogoutButton size="sm" />
                        </HStack>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};
