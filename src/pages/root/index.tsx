import { Suspense } from 'react';

import { Flex, useColorModeValue } from '@chakra-ui/react';
import { FullPageLoader } from '@shared';
import { Outlet } from 'react-router-dom';

export const Root = () => {
    return (
        <Flex minH="100dvh" bg={useColorModeValue('gray.50', 'gray.800')} flexDir="column">
            <Suspense fallback={<FullPageLoader />}>
                <Outlet />
            </Suspense>
        </Flex>
    );
};
