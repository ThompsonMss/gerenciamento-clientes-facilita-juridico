import { Route, Routes, Navigate } from "react-router-dom";

import { nameOfroutes } from "@Routes/nameOfroutes";
import { Common } from "@Shared/Layouts/Common";
import { ListClients } from "@Domain/Features/Clients/ListClients/Page";
import { RegisterAndUpdateClient } from "@Domain/Features/Clients/RegisterAndUpdateClient/Page";

export function RoutesPublic() {

    return (
        <Routes>

            <Route
                element={<Common><ListClients /></Common>}
                path={nameOfroutes.clients}
                index
            />

            <Route
                element={<Common><RegisterAndUpdateClient /></Common>}
                path={nameOfroutes.clientsRegister}
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