import { Stack } from '@chakra-ui/react';
import { GenerateLinkForm } from '@features';
import { Header } from '@widgets';
import { Helmet } from 'react-helmet-async';
const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>Генератор коротких ссылок</title>
            </Helmet>
            <Header />
            <Stack spacing={8} py={12} px={6} height="100%" flex={1}>
                <GenerateLinkForm />
            </Stack>
        </>
    );
};

export default MainPage;
