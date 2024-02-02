import { Route, Routes, Navigate } from "react-router-dom";

import { nameOfroutes } from "@Routes/nameOfroutes";
import { Common } from "@Shared/Layouts/Common";
import { ListClients } from "@Domain/Features/Clients/ListClients/Page";

export function RoutesPublic() {

    return (
        <Routes>

            <Route
                element={<Common><ListClients /></Common>}
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