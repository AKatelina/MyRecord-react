import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            passwordType: true,
            password: '',
            phone: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginAuth = this.loginAuth.bind(this);
    }

    togglePasswordType() {
        this.setState({
            passwordType: !(this.state.passwordType)
        });
    }
    handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    loginAuth() {

            const data = {username: this.state.phone, password: this.state.password};
            axios({

                url: 'http://localhost:8085/api/login',
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
                method: "POST",
                data: data,
            })
                .then(result => {

                    if (result.status == 204 || result.status == 200) {
                        this.setState({pass1: '', pass2: ''});

                    }

                }).catch(error => {
                // this.changeError(true)
            })



    }
    render() {
        return (
            <div>
                <form>
                    <h1>ВХОД</h1>

                    <div>
                        <input
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            id="phone" placeholder="Телефон" autoFocus required/>
                        <label htmlFor="phone" hidden>Телефон</label>
                    </div>

                    <div className="password-toggle-input">
                        <input
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            id="password" type={this.state.passwordType ? 'password' : 'text'}
                               placeholder="Пароль" required/>
                        <label htmlFor="password" hidden>Пароль</label>
                        <img onClick={() => this.togglePasswordType()} className="eye-open-icon"
                             src={this.state.passwordType ?
                                 '../images/icons/login/eye-fill.svg' : '../images/icons/login/eye-slash-fill.svg'}
                             alt="Посмотреть пароль"/>
                    </div>

                    <button type={"button"} onClick={()=>this.loginAuth()} className="btn" >Войти</button>
                    <Link to="/security/password-recovery">Восстановить пароль</Link>
                </form>
            </div>
        );
    }
}

export default Login;