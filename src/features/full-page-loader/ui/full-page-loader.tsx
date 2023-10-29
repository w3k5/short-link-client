import { Flex, Spinner } from '@chakra-ui/react';

export const FullPageLoader = () => {
    return (
        <Flex h="100%" w="100%" flexDir="column" flexGrow={1} alignItems="center" justifyContent="center">
            <Spinner />
        </Flex>
    );
};
