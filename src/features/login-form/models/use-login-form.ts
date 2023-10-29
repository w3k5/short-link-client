import { useAuth } from '@app';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

import type { LoginDto } from '../lib';

import { useLogin } from './use-login';

export const useLoginForm = () => {
    const { mutate, isLoading } = useLogin();
    const { signIn } = useAuth();
    const toast = useToast();

    const handleLogin = (loginDto: LoginDto, redirectTo: string) => {
        mutate(loginDto, {
            onSuccess: ({ accessToken, refreshToken }) => {
                signIn({
                    accessToken,
                    refreshToken,
                    redirectTo,
                });
            },
            onError: (error) => {
                if (error instanceof AxiosError) {
                    toast({
                        title: error.response.data.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top-right',
                    });
                } else {
                    toast({
                        title: error.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top-right',
                    });
                }
            },
        });
    };

    return {
        handleLogin,
        isLoading,
    };
};
