import MainPage from '../Pages/MainPage';
import HomePage from '../Pages/Home';
import CheckoutPage from '../Pages/CheckoutPage'
export const routes = [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "home",
        element: <HomePage />
    },
    {
        path: "checkout",
        element: <CheckoutPage />
    }
];