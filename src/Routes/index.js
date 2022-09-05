import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./routes";
import { AnimatePresence } from 'framer-motion';

const AppRoutes = () => {
    const location = useLocation();

    return (

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {routes.map(({ path, element }, idx) => (
                    <Route
                        path={path}
                        key={idx}
                        element={element}
                    />
                ))}
            </Routes>
        </AnimatePresence>
    )
};
export default AppRoutes;