import './styles/index.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { routerConfig } from './providers';
import { queryClient } from './react-query/query-client';

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <>
                <ChakraProvider>
                    <HelmetProvider>
                        <RouterProvider router={routerConfig} />
                    </HelmetProvider>
                </ChakraProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </>
        </QueryClientProvider>
    );
};

export default App;
