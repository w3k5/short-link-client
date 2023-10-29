import { http } from '@app';
import type { AxiosResponse } from 'axios';

import type { UserInterface } from '../lib';

export const getMeApi = (): Promise<AxiosResponse<UserInterface>> => {
    return http.get('/v1/user/me');
};
