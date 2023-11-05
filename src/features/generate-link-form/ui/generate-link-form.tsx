import { Stack, Text, VStack, useClipboard, useToast } from '@chakra-ui/react';
import { Button, ControllerInput } from '@shared';
import type { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';

import type { GenerateLintDto } from '../lib';
import { useGenerateLink } from '../models';
export const GenerateLinkForm = () => {
    const toast = useToast();
    const {
        control,
        handleSubmit,
        formState: { isDirty },
        reset,
    } = useForm<GenerateLintDto>({
        defaultValues: {
            source: '',
        },
    });

    const { mutate, isLoading } = useGenerateLink();
    const { onCopy, value, setValue } = useClipboard('');
    const onCopyButtonClick = () => {
        onCopy();
        toast({
            title: 'Ссылка скопирована в буфер обмена',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };
    const onSubmit = (generateLinkDto: GenerateLintDto) => {
        mutate(generateLinkDto, {
            onSuccess: ({ alias }) => {
                const apiRoot: string = import.meta.env.VITE_API_URL ?? 'https://www.ruurl.ru';
                setValue(`${apiRoot}/${alias}`);
                reset(generateLinkDto);
            },
            onError: (error: AxiosError<any>) => {
                toast({
                    title: 'Произошла ошибка',
                    description: error.response.data.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            },
        });
    };

    return (
        <VStack spacing={2}>
            <Stack as="form" onSubmit={handleSubmit(onSubmit)} width="100%" direction={{ base: 'column', md: 'row' }}>
                <ControllerInput
                    control={control}
                    name="source"
                    placeholder="Введите ссылку которую хотите сократить"
                    disabled={isLoading}
                />

                <VStack spacing={2} w="100%">
                    <Button type="submit" isDisabled={isLoading || !isDirty} w="100%">
                        Сократить
                    </Button>
                    {value && (
                        <>
                            <Button onClick={onCopyButtonClick} w="100%">
                                <Text>Скопировать</Text>
                            </Button>
                        </>
                    )}
                </VStack>
            </Stack>
        </VStack>
    );
};
