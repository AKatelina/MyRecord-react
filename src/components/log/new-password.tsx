import React from 'react';
import {Link} from 'react-router-dom';

class NewPassword extends React.Component<any, any> {
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
                    <h1>СОЗДАНИЕ НОВОГО&nbsp;ПАРОЛЯ</h1>

                    <div className="password-toggle-input">
                        <input id="new-password"
                               type={this.state.newPasswordType ? 'password' : 'text'}
                               placeholder="Новый пароль" autoFocus/>
                        <label htmlFor="new-password" hidden>Новый пароль</label>
                        <img onClick={() => this.toggleNewPasswordType()} className="eye-open-icon"
                             src={this.state.newPasswordType ?
                                 '../images/icons/login/eye-fill.svg' : '../images/icons/login/eye-slash-fill.svg'}
                             alt="Посмотреть пароль"/>
                    </div>

                    <div className="password-toggle-input">
                        <input id="new-password-repeat"
                               type={this.state.repeatPasswordType ? 'password' : 'text'}
                               placeholder="Повторите пароль"/>
                        <label htmlFor="new-password-repeat" hidden>Повторите пароль</label>
                        <img onClick={() => this.toggleRepeatPasswordType()} className="eye-open-icon"
                             src={this.state.repeatPasswordType ?
                                 '../images/icons/login/eye-fill.svg' : '../images/icons/login/eye-slash-fill.svg'}
                             alt="Посмотреть пароль"/>
                    </div>

                    <Link className="btn" to="/security/login">Сохранить</Link>
                </form>
            </div>
        );
    }
}

export default NewPassword;