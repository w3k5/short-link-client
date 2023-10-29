import type { ComponentProps, FC } from 'react';

import { useAuth } from '@app';
import type { Button } from '@shared';
import { ActionButton } from '@shared';
import { BiLogOut } from 'react-icons/bi';

type LogoutButtonProperties = ComponentProps<typeof Button>;

export const LogoutButton: FC<LogoutButtonProperties> = ({ ...properties }) => {
    const { signOut } = useAuth();
    return (
        <ActionButton
            onClick={signOut}
            aria-label="Logout"
            color="white"
            _hover={{
                bg: 'blue.500',
            }}
            {...properties}
        >
            <BiLogOut />
        </ActionButton>
    );
};
