import { useColorMode } from '@chakra-ui/react';
import { ActionButton } from '@shared';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';

export const ColorSwitcherButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <ActionButton
            onClick={toggleColorMode}
            aria-label="Toggle Color Mode"
            color="white"
            _hover={{
                bg: 'blue.500',
            }}
        >
            {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
        </ActionButton>
    );
};
