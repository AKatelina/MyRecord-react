import React, {useState} from 'react';
import {useAuth} from "../../hooks/auth";

export default function Registration() {
    const [newPasswordType, setNewPasswordType] = useState(true);
    const [repeatPasswordType, setRepeatPasswordType] = useState(true);
    const [phone, setPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const {registration} = useAuth();

    function toggleNewPasswordType() {
        setNewPasswordType(!newPasswordType)
    }

    function toggleRepeatPasswordType() {
        setRepeatPasswordType(!repeatPasswordType)
    }

    function handlePhoneChange(e: { target: { value: any; }; }) {
        setPhone(e.target.value)
    }

    function handleNewPasswordChange(e: { target: { value: any; }; }) {
        setNewPassword(e.target.value)
    }

    function handleRepeatPasswordChange(e: { target: { value: any; }; }) {
        setRepeatPassword(e.target.value)
    }

    function loginReg() {
        if (newPassword == repeatPassword) {
            const data = {phone: phone, password: newPassword};
            registration(data);
            setNewPassword('');
            setRepeatPassword('')
        }
    }

    return (
        <div>
            <form>
                <h1>РЕГИСТРАЦИЯ</h1>

                <div>
                    <input
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        id="registration-phone" type="phone" placeholder="phone"/>
                    <label htmlFor="registration-phone" hidden>Телефон</label>
                </div>

                <div className="password-toggle-input">
                    <input
                        name="newPassword"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        id="registration-password"
                        type={newPasswordType ? 'password' : 'text'}
                        placeholder="Пароль"/>
                    <label htmlFor="registration-password" hidden>Пароль</label>
                    <img onClick={toggleNewPasswordType}
                         className="eye-open-icon"
                         src={newPasswordType ?
                             '../images/icons/login/eye-fill.svg'
                             : '../images/icons/login/eye-slash-fill.svg'}
                         alt="Посмотреть пароль"/>
                </div>

                <div className="password-toggle-input">
                    <input
                        name="pass2"
                        value={repeatPassword}
                        onChange={handleRepeatPasswordChange}
                        id="registration-password-repeat"
                        type={repeatPasswordType ? 'password' : 'text'}
                        placeholder="Повторите пароль"/>
                    <label htmlFor="registration-password-repeat" hidden>Повторите пароль</label>
                    <img onClick={toggleRepeatPasswordType}
                         className="eye-open-icon"
                         src={repeatPasswordType ?
                             '../images/icons/login/eye-fill.svg'
                             : '../images/icons/login/eye-slash-fill.svg'}
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

                <button type={"button"} onClick={loginReg} className="btn">Зарегистрироваться</button>
            </form>
        </div>
    )
}