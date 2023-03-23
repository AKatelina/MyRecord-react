import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../auth';
import React from "react";

export const ProtectRoutes = () => {
    const { cookies } = useAuth();

    console.log(cookies);
    return cookies.jwt_hp ? <Outlet/> : <Navigate to='/login' exact />
};