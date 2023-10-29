import type { FC, PropsWithChildren } from 'react';

import type { FlexProps } from '@chakra-ui/layout/dist/flex';
import { Flex, useColorModeValue } from '@chakra-ui/react';

export const LongCard: FC<PropsWithChildren<FlexProps>> = ({ children, ...properties }) => {
    return (
        <Flex
            p={5}
            borderRadius={12}
            borderWidth={2}
            borderColor="transparent"
            w="100%"
            fontWeight="semibold"
            bg={useColorModeValue('gray.50', 'gray.700')}
            {...properties}
        >
            {children}
        </Flex>
    );
};
