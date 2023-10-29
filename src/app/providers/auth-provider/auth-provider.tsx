import type { ReactElement } from 'react';
import { createContext, useMemo } from 'react';

import { queryClient } from '@app/react-query/query-client';
import type { UserInterface } from '@entities/user/lib';
import { useGetMe, useRefreshTokens } from '@entities/user/models';
import type { TokensPair } from '@shared';
import { LocalStorageTokens } from '@shared';
import { isExpired } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

interface SignInMethodInterface {
    accessToken: string;
    refreshToken: string;
    redirectTo: string;
}

interface AuthContextInterface {
    isAuth: boolean;
    user: UserInterface | null;
    isTokensValid: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    isCurrentUserLoading: boolean;
    signIn: (signInMethodDto: SignInMethodInterface) => void;
    signOut: () => void;
    setTokens: (tokens: TokensPair) => void;
    dropTokens: () => void;
}

interface AuthProviderProperties {
    children: ReactElement;
}

export const AuthContext = createContext<AuthContextInterface>({
    isAuth: false,
    user: null,
    accessToken: null,
    refreshToken: null,
    isTokensValid: false,
    isCurrentUserLoading: true,
    signIn: () => {},
    signOut: () => {},
    setTokens: () => {},
    dropTokens: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProperties): ReactElement => {
    const navigate = useNavigate();
    const accessToken: string | null = localStorage.getItem(LocalStorageTokens.REFRESH_TOKEN);
    const refreshToken: string | null = localStorage.getItem(LocalStorageTokens.REFRESH_TOKEN);
    const isTokensValid = useMemo(() => {
        return !isExpired(accessToken) && !isExpired(refreshToken);
    }, [accessToken, refreshToken]);

    const { data: user, isLoading: isCurrentUserLoading, isFetching: isCurrentUserFetching } = useGetMe(isTokensValid);
    const { data: tokens } = useRefreshTokens();

    const isAuth = useMemo(() => !!user, [user]);

    const setTokens = ({ accessToken, refreshToken }: TokensPair) => {
        localStorage.setItem(LocalStorageTokens.ACCESS_TOKEN, accessToken);
        localStorage.setItem(LocalStorageTokens.REFRESH_TOKEN, refreshToken);
    };

    const dropTokens = () => {
        localStorage.removeItem(LocalStorageTokens.ACCESS_TOKEN);
        localStorage.removeItem(LocalStorageTokens.REFRESH_TOKEN);
    };

    const signIn = ({ accessToken, refreshToken, redirectTo }: SignInMethodInterface) => {
        setTokens({ accessToken, refreshToken });
        navigate(redirectTo);
    };

    const signOut = () => {
        dropTokens();
        queryClient.removeQueries(['CURRENT_USER_CACHE_KEY']);
        navigate('/authentication/login');
    };

    const context: AuthContextInterface = {
        user,
        isAuth,
        accessToken,
        refreshToken,
        isTokensValid,
        isCurrentUserLoading: isCurrentUserLoading && isCurrentUserFetching,
        signIn,
        signOut,
        setTokens,
        dropTokens,
    };

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};
