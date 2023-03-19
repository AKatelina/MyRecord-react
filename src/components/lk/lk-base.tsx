import React from 'react';
import {Outlet, Link} from "react-router-dom";
import axios from "axios";
import '../../css/lk/lk-base.css';

class LkBase extends React.Component<any, any> {

    securityLogout() {
        axios({
            url: 'http://localhost:8085/api/logout',
            withCredentials: true,
            method: "GET"
        }).then(result => {
            if (result.status == 204 || result.status == 200) {

            }
        }).catch(error => {
            // this.changeError(true)
        })
    }

    render() {
        return (
            <div className="lk-main">
                <div className="sidebar">
                    <div className="top">
                        <div className="company">
                            КлиКли.Услуги
                        </div>
                    </div>

                    <div className="footer">
                        <Link to="/login" onClick={() => this.securityLogout()}>
                            <img className="logout" src="images/icons/lk-base/box-arrow-left.svg"
                                 alt="Выход из личного кабинета"/>
                        </Link>
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
}

export default LkBase;