import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class Login extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            passwordType: true,
            loginPhone: '+7 (',
            loginPassword: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.securityAuth = this.securityAuth.bind(this)
    }

    handleInputChange(event: any) {
        const target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    // let num = '+7 (';
    // if (val.length <= 4) {
    // num = '+7 (';
    // } else if (val.length < 8) {
    //     num = `${val.substring(0, 4)}${val.substring(4, 7)}`;
    // } if (val.length < 19) {
    //     num = `${val.substring(0, 4)}${val.substring(4, 18)}`;
    // }
    // if (val.length === 6) {
    //     num = `${val.substring(0, 3)}${val.substring(3, 6)})`;
    //     num = num.trim();
    // }
    // if (val.length === 6) {
    //     num = `${val.substring(0, 3)}${val.substring(3, 6)})`;
    //     num = num.trim();
    // }
    // num = num.trim();


    securityAuth() {
        const data = {username: this.state.loginPhone, password: this.state.loginPassword};
        axios({
            url: 'http://192.168.31.231:8092/api/login',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data
        }).then(result => {
            if (result.status == 204 || result.status == 200) {
                this.setState({loginPhone: '', loginPassword: ''})
            }
        }).catch(error => {
            // this.changeError(true)
        })
    }

    togglePasswordType() {
        this.setState({
            passwordType: !(this.state.passwordType)
        });
    }

    changePhone() {

    }

    render() {
        return (
            <div>
                <form name="login">
                    <h1>ВХОД</h1>

                    <div>
                        <label htmlFor="loginPhone" hidden>Номер телефона</label>
                        <input
                            id="loginPhone"
                            name="loginPhone"
                            type="tel"
                            placeholder="+7"
                            maxLength={18}
                            value={this.state.loginPhone}
                            onChange={this.handleInputChange}
                            autoFocus required/>
                    </div>

                    <div className="password-toggle-input">
                        <label htmlFor="loginPassword" hidden>Пароль</label>
                        <input
                            id="loginPassword"
                            name="loginPassword"
                            type={this.state.passwordType ? 'password' : 'text'}
                            placeholder="Пароль"
                            value={this.state.loginPassword}
                            onChange={this.handleInputChange}
                            required/>
                        <img
                            className="eye-open-icon"
                            alt="Посмотреть пароль"
                            onClick={() => this.togglePasswordType()}
                            src={this.state.passwordType ?
                                '../images/icons/login/eye-fill.svg'
                                : '../images/icons/login/eye-slash-fill.svg'}/>
                    </div>

                    <button className="btn" type={"button"}
                            onClick={() => this.securityAuth()}>
                        Войти
                    </button>
                    <Link to="/password-recovery">Восстановить пароль</Link>
                </form>
            </div>
        );
    }
}

export default Login;