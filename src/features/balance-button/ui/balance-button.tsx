import type { ComponentProps, FC } from 'react';

import { useAuth } from '@app';
import { HStack, Text } from '@chakra-ui/react';
import { Button, formatCurrency } from '@shared';
import { BsWallet2 } from 'react-icons/bs';

type BalanceButtonProperties = ComponentProps<typeof Button>;
export const BalanceButton: FC<BalanceButtonProperties> = ({ ...properties }) => {
    const {
        user: { balance },
    } = useAuth();
    return (
        <Button
            variant="ghost"
            w="fit-content"
            color="white"
            _hover={{
                bg: 'blue.500',
            }}
            {...properties}
        >
            <HStack>
                <BsWallet2 />
                <Text>{formatCurrency(balance)}</Text>
            </HStack>
        </Button>
    );
};
