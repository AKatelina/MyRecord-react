import React from 'react';
import {Outlet, Link} from "react-router-dom";
import '../../css/security/security.css';

function SecurityBase() {
    return (
        <div className="security-main">
            <div className="header">
                <div className="max-wrap">
                    <Link className="logo" to="/login">КлиКли.Услуги</Link>
                    <Link to="/login">Вход</Link>
                    <Link to="/registration">Регистрация</Link>
                </div>
            </div>

            <Outlet/>

            <div className="security-footer">
                <div className="max-wrap">
                    <span>
                        @ 2023 ООО
                        <Link to="/login">&nbsp;"Айти Вертекс"</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SecurityBase;