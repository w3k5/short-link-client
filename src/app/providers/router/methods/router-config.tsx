import { RequireAuth } from '@app';
import { AuthLayout, DashboardLayout, LoginPage, RegisterPage } from '@pages';
import MainPage from '@pages/main';
import { Root } from '@pages/root';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: '/dashboard',
                element: (
                    <RequireAuth>
                        <DashboardLayout />
                    </RequireAuth>
                ),
                children: [],
            },
            {
                path: 'authentication',
                element: <AuthLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="login" />,
                    },
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                    {
                        path: 'register',
                        element: <RegisterPage />,
                    },
                    {
                        path: '*',
                        element: <Navigate to="login" />,
                    },
                ],
            },
        ],
    },
]);
