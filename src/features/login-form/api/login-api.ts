import { http } from '@app';
import type { TokensPair } from '@shared/lib';
import type { AxiosResponse } from 'axios';

import type { LoginDto } from '../lib';

export const loginApi = (loginDto: LoginDto): Promise<AxiosResponse<TokensPair>> => {
    return http.post<TokensPair>('/v1/auth/login', loginDto);
};
