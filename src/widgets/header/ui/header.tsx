import React from 'react';
import type { FC } from 'react';

import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { ColorSwitcherButton } from '@features';

export const Header: FC = () => (
    <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px={8}
        py={4}
        bg={useColorModeValue('blue.600', 'blue.900')}
        color="white"
    >
        <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                Ruurl
            </Heading>
        </Flex>

        <ColorSwitcherButton />
    </Flex>
);
