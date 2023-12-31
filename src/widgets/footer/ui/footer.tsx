import type { ComponentProps } from 'react';

import { Box, Container, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ColorSwitcherButton } from '@features';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
                <Stack direction={'row'} spacing={6}>
                    <Link to={'/'} as={(properties: ComponentProps<typeof NavLink>) => <NavLink {...properties} />}>
                        Главная
                    </Link>
                </Stack>
            </Container>

            <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Text>© 2023 Vladislav Marchenko. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <ColorSwitcherButton />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};
