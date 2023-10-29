import type { ButtonProps } from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({ isDisabled, children, ...properties }: ButtonProps) => {
    const cursor: ButtonProps['cursor'] = isDisabled ? 'not-allowed' : 'pointer';
    return (
        <ChakraButton
            colorScheme={isDisabled ? 'gray' : 'blue'}
            cursor={cursor}
            isDisabled={isDisabled}
            {...properties}
        >
            {children}
        </ChakraButton>
    );
};

export const ActionButton = ({ children, ...properties }: ButtonProps) => {
    return (
        <Button size="sm" variant="ghost" w="fit-content" {...properties}>
            {children}
        </Button>
    );
};
