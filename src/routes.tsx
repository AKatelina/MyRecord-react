import LkBase from "./components/lk/lk-base";
import React from "react";
import {LK_MAIN_ROUTE, LOGIN_ROUTE, NEW_PASSWORD_ROUTE, PASSWORD_RECOVERY_ROUTE, REGISTRATION_ROUTE} from "./utils";
import SecurityBase from "./components/security/security-base";
import Login from "./components/security/login";
import Registration from "./components/security/registration";
import NewPassword from "./components/security/new-password";
import PasswordRecovery from "./components/security/password-recovery";

export const authRoutes = [
    {
        path: LK_MAIN_ROUTE,
        component: <LkBase/>,
        // errorElement: <ErrorPage />
    },
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Login/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Registration/>
    },
    {
        path: NEW_PASSWORD_ROUTE,
        component: <NewPassword/>
    },
    {
        path: PASSWORD_RECOVERY_ROUTE,
        component: <PasswordRecovery/>
    }
];