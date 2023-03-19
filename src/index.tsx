import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import SecurityBase from './components/security/security-base'
import Login from './components/security/login';
import Registration from "./components/security/registration";
import NewPassword from "./components/security/new-password";
import PasswordRecovery from "./components/security/password-recovery";
import Cookies from "universal-cookie";


import LkBase from "./components/lk/lk-base";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const openRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <LkBase/>
            // errorElement: <ErrorPage />
        },
        {
            path: "",
            element: <SecurityBase/>,
            children: [
                {
                    path: "login/",
                    element: <Login/>
                },
                {
                    path: "registration/",
                    element: <Registration/>
                },
                {
                    path: "new-password",
                    element: <NewPassword/>
                },
                {
                    path: "password-recovery/",
                    element: <PasswordRecovery/>
                },
            ]
        },
    ]);
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LkBase/>
            // errorElement: <ErrorPage />
        },
        {
            path: "",
            element: <SecurityBase/>,
            children: [
                {
                    path: "login/",
                    element: <Login/>
                },
                {
                    path: "registration/",
                    element: <Registration/>
                },
                {
                    path: "new-password",
                    element: <NewPassword/>
                },
                {
                    path: "password-recovery/",
                    element: <PasswordRecovery/>
                },
            ]
        },
    ]);
const cookies = new Cookies();


function checkSecurity() {
    if (cookies.get("jwt_hp")) {
        return router

    } else {
        return openRouter

    }
}

root.render(
    <React.StrictMode>

        <RouterProvider router={checkSecurity()}/>
    </React.StrictMode>
);

reportWebVitals();
