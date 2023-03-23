import React from "react";
import {useRoutes} from "react-router-dom";
import {ProtectRoutes} from "../hooks/protectRoutes";
import {authRoutes, securityPublicRoutes} from "./routes";

import SecurityBase from "../components/security/security-base";

export default function AppRouting() {
    return useRoutes([
        {
            path: "/",
            element: <ProtectRoutes/>,
            children: authRoutes
        },
        {
            path: "/",
            element: <SecurityBase/>,
            children: securityPublicRoutes
        }
    ]);
}