import type { TokensPair } from '@shared';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { loginApi } from '../api/login-api';
import type { LoginDto } from '../lib';

const SIGN_IN_TOKEN = 'SIGN_IN_TOKEN ';

export const useLogin = (): UseMutationResult<TokensPair, AxiosError | Error, LoginDto> => {
    return useMutation([SIGN_IN_TOKEN], async (loginDto: LoginDto) => {
        const result = await loginApi(loginDto);
        return result.data;
    });
};
