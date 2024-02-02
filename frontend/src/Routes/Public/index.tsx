import { Route, Routes, Navigate } from "react-router-dom";

import { nameOfroutes } from "@Routes/nameOfroutes";

export function RoutesPublic() {

    return (
        <Routes>

            <Route
                element={<a>Clientes</a>}
                path={nameOfroutes.clients}
                index
            />

            {/* FALLBACK */}
            <Route
                element={<Navigate to={nameOfroutes.clients} />}
                path="*"
            />
        </Routes>
    );
}