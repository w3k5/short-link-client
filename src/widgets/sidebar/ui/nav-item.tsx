import type { FC, ReactElement } from 'react';

import { HStack, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export interface NavItemProperties {
    link: string;
    label: string;
    icon: ReactElement;
}

export const NavItem: FC<NavItemProperties> = ({ link, label, icon }) => {
    return (
        <Link
            style={{ textDecoration: 'none' }}
            as={ReactRouterLink}
            to={link}
            _hover={{
                bg: useColorModeValue('blue.50', 'blue.700'),
                color: useColorModeValue('blue.500', 'blue.100'),
            }}
            px={4}
            py="5px"
            borderRadius={8}
            fontWeight="semibold"
            w="100%"
        >
            <HStack alignItems="center" spacing={3}>
                {icon}
                <Text>{label}</Text>
            </HStack>
        </Link>
    );
};
