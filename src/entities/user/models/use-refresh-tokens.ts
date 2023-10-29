import { LocalStorageTokens, refreshApi } from '@shared';
import { useQuery } from '@tanstack/react-query';
import { isExpired } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

const USE_REFRESH_TOKEN_CACHE_KEY = 'USE_REFRESH_TOKEN_CACHE_KEY';

export const useRefreshTokens = () => {
    const navigate = useNavigate();

    return useQuery(
        [USE_REFRESH_TOKEN_CACHE_KEY],
        async () => {
            const refreshToken = localStorage.getItem(LocalStorageTokens.REFRESH_TOKEN);
            const isTokenValid = !isExpired(refreshToken);
            if (!isTokenValid) {
                localStorage.removeItem(LocalStorageTokens.ACCESS_TOKEN);
                localStorage.removeItem(LocalStorageTokens.REFRESH_TOKEN);
                navigate('/authentication/login');
                return;
            }

            const response = await refreshApi(refreshToken);
            return response.data;
        },
        {
            onSuccess: (tokens) => {
                localStorage.setItem(LocalStorageTokens.ACCESS_TOKEN, tokens.accessToken);
                localStorage.setItem(LocalStorageTokens.REFRESH_TOKEN, tokens.refreshToken);
            },
            refetchInterval: 250_000,
            enabled: !!localStorage.getItem(LocalStorageTokens.REFRESH_TOKEN),
        },
    );
};
