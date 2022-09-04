import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";


function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, element }, idx) => (
                    <Route
                        path={path}
                        key={idx}
                        element={element}
                    />
                ))}
            </Routes>
        </BrowserRouter>)
};
export default AppRoutes;