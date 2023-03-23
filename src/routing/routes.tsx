import LkBase from "../components/lk/lk-base";
import React from "react";
import Login from "../components/security/login";
import Registration from "../components/security/registration";
import NewPassword from "../components/security/new-password";
import PasswordRecovery from "../components/security/password-recovery";
import {LK_MAIN_ROUTE, LOGIN_ROUTE, NEW_PASSWORD_ROUTE, PASSWORD_RECOVERY_ROUTE, REGISTRATION_ROUTE} from "./utils";


export const authRoutes = [
    {
        path: LK_MAIN_ROUTE,
        element: <LkBase/>,
    },
];

export const securityPublicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Login/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Registration/>
    },
    {
        path: NEW_PASSWORD_ROUTE,
        element: <NewPassword/>
    },
    {
        path: PASSWORD_RECOVERY_ROUTE,
        element: <PasswordRecovery/>
    }
];