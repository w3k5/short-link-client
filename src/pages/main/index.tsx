import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { GenerateLinkForm } from '@features';
import { Helmet } from 'react-helmet-async';
const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>Генератор коротких ссылок</title>
            </Helmet>
            <Stack spacing={8} py={12} px={6} height="100%" align="center" justify="center" flex={1}>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                    width="100%"
                    maxW="600px"
                >
                    <GenerateLinkForm />
                </Box>
            </Stack>
        </>
    );
};

export default MainPage;
