import { HStack, Text, VStack, useClipboard, useToast } from '@chakra-ui/react';
import { Button, ControllerInput } from '@shared';
import type { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { AiOutlineLink } from 'react-icons/ai';

import type { GenerateLintDto } from '../lib';
import { useGenerateLink } from '../models';

export const GenerateLinkForm = () => {
    const toast = useToast();
    const { control, handleSubmit } = useForm<GenerateLintDto>({
        defaultValues: {
            source: '',
        },
    });

    const { mutate, isLoading } = useGenerateLink();
    const { onCopy, value, setValue, hasCopied } = useClipboard('');
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
            <HStack as="form" onSubmit={handleSubmit(onSubmit)} width="100%">
                <ControllerInput
                    control={control}
                    name="source"
                    placeholder="Введите ссылку которую хотите сократить"
                    disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                    Сократить
                </Button>
            </HStack>
            {value && (
                <HStack as="button" cursor="pointer" onClick={onCopyButtonClick} alignSelf="center">
                    <Text>{value}</Text>
                    <AiOutlineLink />
                </HStack>
            )}
        </VStack>
    );
};
