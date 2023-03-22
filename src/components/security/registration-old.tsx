import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class RegistrationOld extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            newPasswordType: true,
            repeatPasswordType: true,
            phone: '',
            pass1: '',
            pass2: '',

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginReg = this.loginReg.bind(this);
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
    handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    loginReg() {
        if (this.state.pass1 == this.state.pass2) {
            const data = {phone: this.state.phone, password: this.state.pass1};
            axios({

                url: 'http://localhost:8085/registration',
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


    }

    render() {
        return (
            <div>
                <form>
                    <h1>РЕГИСТРАЦИЯ</h1>

                    <div>
                        <input
                            name="phone"

                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            id="registration-mail" type="phone" placeholder="phone"/>
                        <label htmlFor="registration-mail" hidden>Почта</label>
                    </div>

                    <div className="password-toggle-input">
                        <input
                            name="pass1"

                            value={this.state.pass1}
                            onChange={this.handleInputChange}
                            id="registration-password"
                            type={this.state.newPasswordType ? 'password' : 'text'}
                            placeholder="Пароль"/>
                        <label htmlFor="registration-password" hidden>Пароль</label>
                        <img onClick={() => this.toggleNewPasswordType()} className="eye-open-icon"
                             src={this.state.newPasswordType ?
                                 '../images/icons/login/eye-fill.svg' : '../images/icons/login/eye-slash-fill.svg'}
                             alt="Посмотреть пароль"/>
                    </div>

                    <div className="password-toggle-input">
                        <input
                            name="pass2"

                            value={this.state.pass2}
                            onChange={this.handleInputChange}
                            id="registration-password-repeat"
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

                    <button type={"button"} onClick={() => this.loginReg()} className="btn">Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}

export default RegistrationOld;