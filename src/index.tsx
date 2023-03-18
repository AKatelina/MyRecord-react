import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import LogBase from './components/log/log-base'
import Login from './components/log/login';
import Registration from "./components/log/registration";
import NewPassword from "./components/log/new-password";
import PasswordRecovery from "./components/log/password-recovery";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogBase/>
        // errorElement: <ErrorPage />
    },
    {
        path: "security/",
        element: <LogBase/>,
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

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();
