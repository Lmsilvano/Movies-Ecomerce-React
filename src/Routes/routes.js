import MainPage from '../Pages/MainPage';
import HomePage from '../Pages/Home';

export const routes = [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "home",
        element: <HomePage />
    },
];