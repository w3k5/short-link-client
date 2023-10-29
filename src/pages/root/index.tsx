import { Suspense } from 'react';

import { AuthProvider } from '@app';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { FullPageLoader } from '@shared';
import { use100vh } from 'react-div-100vh';
import { Outlet } from 'react-router-dom';

export const Root = () => {
    const height = use100vh();
    return (
        <AuthProvider>
            <Flex minH={height} bg={useColorModeValue('white', 'gray.800')} flexDir="column">
                <Suspense fallback={<FullPageLoader />}>
                    <Outlet />
                </Suspense>
            </Flex>
        </AuthProvider>
    );
};
