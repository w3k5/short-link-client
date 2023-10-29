import { VStack } from '@chakra-ui/react';
import { BiBookAdd, BiServer } from 'react-icons/bi';

import type { NavItemProperties } from './nav-item';
import { NavItem } from './nav-item';

const links: NavItemProperties[] = [
    {
        link: '/dashboard/servers',
        label: 'Мои серверы',
        icon: <BiServer size={20} />,
    },
    {
        link: '/dashboard/create-server/configuration',
        label: 'Создать сервер',
        icon: <BiBookAdd size={20} />,
    },
];

export const Sidebar = () => {
    return (
        <VStack minW="250px" position="sticky" top="30px">
            {links.map((link) => (
                <NavItem {...link} key={link.link} />
            ))}
        </VStack>
    );
};
