import React from 'react';
import {Link} from 'react-router-dom';

class Registration extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            newPasswordType: true,
            repeatPasswordType: true
        };
    }

    toggleNewPasswordType() {
        this.setState({
            newPasswordType: !(this.state.newPasswordType)
        });
    }

    toggleRepeatPasswordType() {
        this.setState({
            repeatPasswordType: !(this.state.repeatPasswordType)
        });
    }

    render() {
        return (
            <div>
                <form>
                    <h1>РЕГИСТРАЦИЯ</h1>

                    <div>
                        <input id="registration-mail" type="email" placeholder="Email"/>
                        <label htmlFor="registration-mail" hidden>Почта</label>
                    </div>

                    <div className="password-toggle-input">
                        <input id="registration-password"
                               type={this.state.newPasswordType ? 'password' : 'text'}
                               placeholder="Пароль"/>
                        <label htmlFor="registration-password" hidden>Пароль</label>
                        <img onClick={() => this.toggleNewPasswordType()} className="eye-open-icon"
                             src={this.state.newPasswordType ?
                                 '../images/icons/login/eye-fill.svg' : '../images/icons/login/eye-slash-fill.svg'}
                             alt="Посмотреть пароль"/>
                    </div>

                    <div className="password-toggle-input">
                        <input id="registration-password-repeat"
                               type={this.state.repeatPasswordType ? 'password' : 'text'}
                               placeholder=" Повторите пароль"/>
                        <label htmlFor="registration-password-repeat" hidden>Повторите пароль</label>
                        <img onClick={() => this.toggleRepeatPasswordType()} className="eye-open-icon"
                             src={this.state.repeatPasswordType ?
                                 '../images/icons/login/eye-fill.svg' : '../images/icons/login/eye-slash-fill.svg'}
                             alt="Посмотреть пароль"/>
                    </div>

                    <div className="checkbox-wrap">
                        <label htmlFor="registration-agreement" hidden>Соглашение</label>
                        <input id="registration-agreement" type="checkbox"/>
                        <span>Я&nbsp;принимаю </span>
                        <a href="#">условия лицензионного договора</a>
                        <span> и&nbsp;разрешаю </span>
                        <a href="#">обработку персональных данных</a>
                    </div>

                    <Link className="btn" to="/security/login">Зарегистрироваться</Link>
                </form>
            </div>
        )
    }
}

export default Registration;