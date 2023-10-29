import type { ReactNode } from 'react';

import type { InputProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { Controller } from 'react-hook-form';

interface GenericInputProperties<T extends FieldValues> extends UseControllerProps<T> {
    label?: string;
    placeholder?: string;
    suffixElement?: ReactNode;
    prefixElement?: ReactNode;
    disabled?: boolean;
}

export const ControllerInput = <T extends FieldValues>({
    control,
    label,
    name,
    type,
    disabled,
    suffixElement,
    prefixElement,
    placeholder,
}: GenericInputProperties<T> & InputProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { invalid, error } }) => {
                return (
                    <FormControl isInvalid={!!error}>
                        {label && (
                            <FormLabel
                                _invalid={{
                                    color: 'red.300',
                                }}
                            >
                                {label}
                            </FormLabel>
                        )}
                        <InputGroup>
                            {prefixElement}
                            <Input
                                type={type}
                                isInvalid={invalid}
                                placeholder={placeholder}
                                {...field}
                                disabled={disabled}
                            />
                            {suffixElement}
                        </InputGroup>
                        <FormErrorMessage>{error?.message}</FormErrorMessage>
                    </FormControl>
                );
            }}
        />
    );
};
