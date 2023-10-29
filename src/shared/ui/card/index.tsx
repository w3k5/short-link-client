import type { FC, PropsWithChildren } from 'react';

import type { CardProps as ChakraCardProperties } from '@chakra-ui/react';
import {
    Card as ChakraCard,
    CardBody as ChakraCardBody,
    CardHeader as ChakraCardHeader,
    Heading,
} from '@chakra-ui/react';

interface CardProperties extends ChakraCardProperties {
    header?: string;
}
export const Card: FC<PropsWithChildren<CardProperties>> = ({ children, header, ...properties }) => {
    return (
        <ChakraCard variant="outline" {...properties}>
            {header && (
                <ChakraCardHeader pb={0}>
                    <Heading size="md">{header}</Heading>
                </ChakraCardHeader>
            )}
            <ChakraCardBody>{children}</ChakraCardBody>
        </ChakraCard>
    );
};
