import React from 'react';
import {Outlet, Link,useNavigate} from "react-router-dom";
import axios from "axios";
import '../../css/lk/lk-base.css';
import Cookies from "universal-cookie";
import Login from "../security/login";

class LkBase extends React.Component<any, any> {

    securityLogout() {
        const cookies = new Cookies();


        if(cookies.get("jwt_hp")){
            axios({
                url: 'http://localhost:8085/logout',
                withCredentials: true,
                method: "GET"
            }).then(result => {
                this.props.navigate("/login");
                let navigate = useNavigate();
                return <Login {...this.props} navigate={navigate} />
                // if (result.status == 204 || result.status == 200) {
                //     navigate("/path/to/push");
                // }
            }).catch(error => {
                // this.changeError(true)

            })
        }

    }
    componentDidMount() {

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
                        <button type={"button"} onClick={() => this.securityLogout()}>
                            <img className="logout" src="images/icons/lk-base/box-arrow-left.svg"
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
}

export default LkBase;