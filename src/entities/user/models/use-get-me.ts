import type { UserInterface } from '@entities/user/lib';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getMeApi } from '../api';

const CURRENT_USER_CACHE_KEY = 'CURRENT_USER_CACHE_KEY';

export const useGetMe = (loggedIn: boolean): UseQueryResult<UserInterface, AxiosError | Error> =>
    useQuery(
        [CURRENT_USER_CACHE_KEY],
        async () => {
            const response = await getMeApi();
            return response.data;
        },
        {
            enabled: loggedIn,
        },
    );
