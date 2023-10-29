import { useAuth } from '@app';
import { LoginForm } from '@features';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Navigate to={'/dashboard'} />;
    }

    return (
        <>
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <LoginForm />
        </>
    );
};

export default LoginPage;
