import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayouts';
import HomePage from './pages/home/HomePage';
import TestPage from './pages/tests/TestPage';
import IconPage from './pages/icon/IconPage';

export const router = createBrowserRouter([
    {
        path: "/", Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: 'tests', Component: TestPage },
            { path: 'icons', Component: IconPage },
        ]
    }
]);