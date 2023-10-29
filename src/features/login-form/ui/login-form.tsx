import { Box, Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ControllerInput } from '@shared';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';

import type { LoginFormInterface } from '../lib';
import { useLoginForm } from '../models/use-login-form';

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required(),
});

export const LoginForm = () => {
    const { control, handleSubmit } = useForm<LoginFormInterface>({
        mode: 'onChange',
        defaultValues: {
            login: 'admin@admin.ru',
            password: 'Pa$word1!',
        },
        resolver: yupResolver(schema),
    });
    const location = useLocation();
    const redirectLink = location.state?.from.pathname ?? '/dashboard';
    const { handleLogin, isLoading } = useLoginForm();

    return (
        <Flex align={'center'} justify={'center'} flexDir="column" flex={1}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Войдите в ваш аккаунт</Heading>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack
                        spacing={4}
                        as="form"
                        onSubmit={handleSubmit((loginDto) => handleLogin(loginDto, redirectLink))}
                    >
                        <ControllerInput control={control} name="login" label="Логин" disabled={isLoading} />
                        <ControllerInput
                            control={control}
                            name="password"
                            label="Пароль"
                            type="password"
                            disabled={isLoading}
                        />
                        <Stack spacing={10}>
                            {/*<Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>*/}
                            {/*    <Link color={'blue.400'}>Забыли пароль?</Link>*/}
                            {/*</Stack>*/}
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                type="submit"
                                isLoading={isLoading}
                            >
                                Войти
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
