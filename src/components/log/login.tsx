import React, {useState} from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            passwordType: true
        };
    }

    togglePasswordType() {
        this.setState({
            passwordType: !(this.state.passwordType)
        });
    }

    render() {
        return (
            <div>
                <form>
                    <h1>ВХОД</h1>

                    <div>
                        <input id="email" placeholder="Email" autoFocus required/>
                        <label htmlFor="email" hidden>Email</label>
                    </div>

                    <div className="password-toggle-input">
                        <input id="password" type={this.state.passwordType ? 'password' : 'text'}
                               placeholder="Пароль" required/>
                        <label htmlFor="password" hidden>Пароль</label>
                        <img onClick={() => this.togglePasswordType()} className="eye-open-icon"
                             src={this.state.passwordType ?
                                 '../images/icons/login/eye-fill.svg' : '../images/icons/login/eye-slash-fill.svg'}
                             alt="Посмотреть пароль"/>
                    </div>

                    <Link className="btn" to="/security/login">Войти</Link>
                    <Link to="/security/password-recovery">Восстановить пароль</Link>
                </form>
            </div>
        );
    }
}

export default Login;