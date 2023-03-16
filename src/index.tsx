import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Root from './components/login/root'
import Login from './components/login/login';
import Registration from "./components/login/registration";
import NewPassword from "./components/login/new-password";
import PasswordRecovery from "./components/login/password-recovery";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        // errorElement: <ErrorPage />
    },
    {
        path: "security/",
        element: <Root/>,
        children: [
            {
                path: "login/",
                element: <Login/>,
            },
            {
                path: "registration/",
                element: <Registration/>,
            },
            {
                path: "new-password",
                element: <NewPassword/>,
            },
            {
                path: "password-recovery/",
                element: <PasswordRecovery/>,
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
