import { Container, Flex, HStack } from '@chakra-ui/react';
import { Navbar, Sidebar } from '@widgets';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
    return (
        <>
            <Helmet>
                <title>Система управления игровыми серверами</title>
            </Helmet>
            <Flex minH="100%" h="100%" direction="column" flexGrow={1}>
                <Navbar />
                <Container maxW={'container.xl'} flex={1} flexGrow={1}>
                    <HStack w="100%" py={6} height="100%" alignItems="flex-start">
                        <Sidebar />
                        <Flex h="100%" flexGrow={1}>
                            <Outlet />
                        </Flex>
                    </HStack>
                </Container>
            </Flex>
        </>
    );
};
