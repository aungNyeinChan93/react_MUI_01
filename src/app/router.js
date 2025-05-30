import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayouts';
import HomePage from './pages/home/HomePage';
import TestPage from './pages/tests/TestPage';
import IconPage from './pages/icon/IconPage';
import ProductPage from './pages/product/ProductPage';
import CreateProductPage from './pages/product/CreateProductPage';
import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import NotePage from './pages/notes/NotePage';
import RecipePage from './pages/recipes/RecipePage';
import CreateRecipePage from './pages/recipes/CreateRecipePage';
import CreateNotePage from './pages/notes/CreateNotePage';
import SecondaryLayout from './layouts/SecondaryLayout';

export const router = createBrowserRouter([
    {
        path: "/", Component: SecondaryLayout, children: [
            { index: true, Component: HomePage },
            { path: 'tests', Component: TestPage },
            { path: 'icons', Component: IconPage },
            { path: 'products', Component: ProductPage },
            { path: 'products/create', Component: CreateProductPage },
            { path: 'notes', Component: NotePage },
            { path: 'notes/create', Component: CreateNotePage },
            { path: 'recipes', Component: RecipePage },
            { path: 'recipes/create', Component: CreateRecipePage },
        ]
    },
    {
        path: '/auth', Component: AuthLayout, children: [
            { path: 'login', Component: LoginPage },
        ]
    }
]);