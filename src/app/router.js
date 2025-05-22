import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayouts';
import HomePage from './pages/home/HomePage';
import TestPage from './pages/tests/TestPage';
import IconPage from './pages/icon/IconPage';
import ProductPage from './pages/product/ProductPage';
import CreateProductPage from './pages/product/CreateProductPage';
import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/auth/LoginPage';

export const router = createBrowserRouter([
    {
        path: "/", Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: 'tests', Component: TestPage },
            { path: 'icons', Component: IconPage },
            { path: 'products', Component: ProductPage },
            { path: 'products/create', Component: CreateProductPage },
        ]
    },
    {
        path: '/auth', Component: AuthLayout, children: [
            { path: 'login', Component: LoginPage },
        ]
    }
]);