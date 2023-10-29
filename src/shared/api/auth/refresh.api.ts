import type { TokensPair } from '@shared/lib';
import axios from 'axios';
import type { AxiosResponse } from 'axios';

export const refreshApi = (refreshToken: string): Promise<AxiosResponse<TokensPair>> => {
    return axios.post<TokensPair>('/v1/auth/refresh-token', { refreshToken });
};
