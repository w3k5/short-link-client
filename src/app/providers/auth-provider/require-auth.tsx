import type { PropsWithChildren, ReactElement } from 'react';
import { useEffect } from 'react';

import { useAuth } from '@app';
import { FullPageLoader } from '@features';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProperties {
    children: ReactElement;
}

export const RequireAuth = ({ children }: PropsWithChildren<RequireAuthProperties>) => {
    const location = useLocation();
    const { isAuth, isCurrentUserLoading, isTokensValid, signOut } = useAuth();

    useEffect(() => {
        if (!isTokensValid) {
            signOut();
        }
    }, [isTokensValid]);

    if (isCurrentUserLoading) {
        return <FullPageLoader />;
    }

    if (!isAuth) {
        return <Navigate to={`/authentication/login`} state={{ from: location }} replace={true} />;
    }

    return children;
};
