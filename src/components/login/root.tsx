import React from 'react';
import {Outlet, Link} from "react-router-dom";
import '../../css/login/login.css';

function Security() {
    return (
        <div className="main">
            <div className="header">
                <div className="max-wrap">
                    <Link className="logo" to="/security/login">КлиКли.Услуги</Link>
                    <Link to="/security/login">Вход</Link>
                    <Link to="/security/registration">Регистрация</Link>
                </div>
            </div>

            <Outlet/>

            <div className="footer">
                <div className="max-wrap">
                    <span>
                        @ 2023 ООО
                        <Link to="/security/login">&nbsp;"Айти Вертекс"</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Security;