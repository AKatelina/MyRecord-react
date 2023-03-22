import React from 'react';
import {useAuth} from "../../hooks/auth";
import '../../css/lk/lk-base.css';

export default function LkBase() {
    const {logout} = useAuth();

    return (
        <div className="lk-main">
            <div className="sidebar">
                <div className="top">
                    <div className="company">
                        КлиКли.Услуги
                    </div>
                </div>

                <div className="footer">
                    <button type={"button"} onClick={logout}>
                        <img className="logout"
                             src="images/icons/lk-base/box-arrow-left.svg"
                             alt="Выход из личного кабинета"/>
                    </button>
                </div>
            </div>

            <div className="lk-right">
                <div className="navbar">
                    <div className="breadcrumbs">
                        <a href="/">Главная</a> /
                    </div>
                </div>
                <div className="lk-content">
                    <span>Добро пожаловать в личный кабинет!</span>
                </div>
            </div>
        </div>
    )
}