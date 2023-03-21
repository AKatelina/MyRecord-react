import React from 'react';
import {Route, redirect, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import Cookies from "universal-cookie";

const AppRouter = () => {
    const cookies = new Cookies();

    const isAuth = cookies.get("jwt_hp") !== undefined;
    console.log(isAuth);

    return (
        <switch>
            {isAuth && authRoutes.map(({path, component}) =>
                <Routes>
                    <Route key={path} path={path} element={component}/>
                </Routes>
            )}
            {publicRoutes.map(({path, component}) =>
                <Routes>
                    <Route key={path} path={path} element={component}/>
                </Routes>
            )}
        </switch>
    );
};

export default AppRouter;