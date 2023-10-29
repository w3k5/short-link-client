import { Flex, Spinner } from '@chakra-ui/react';

export const FullPageSpinner = () => {
    return (
        <Flex flexGrow={1} justify="center" align="center">
            <Spinner />
        </Flex>
    );
};
