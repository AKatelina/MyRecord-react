import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from "../../hooks/auth";

export default function Login() {
    const [loginPhone, setLoginPhone] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [passwordType, setPasswordType] = useState(true);
    const {login} = useAuth();


    function togglePasswordType() {
        setPasswordType(!passwordType)
    }

    function handleLoginPhoneChange(e: { target: { value: any; }; }) {
        setLoginPhone(e.target.value)
    }

    function handleLoginPasswordChange(e: { target: { value: any; }; }) {
        setLoginPassword(e.target.value)
    }

    function handleLogin() {
        const data = {loginPhone, loginPassword};
        login(data);
    }

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
                        placeholder="Телефон"
                        maxLength={18}
                        value={loginPhone}
                        onChange={handleLoginPhoneChange}
                        autoFocus required/>
                </div>

                <div className="password-toggle-input">
                    <label htmlFor="loginPassword" hidden>Пароль</label>
                    <input
                        id="loginPassword"
                        name="loginPassword"
                        type={passwordType ? 'password' : 'text'}
                        placeholder="Пароль"
                        value={loginPassword}
                        onChange={handleLoginPasswordChange}
                        required/>
                    <img
                        className="eye-open-icon"
                        alt="Посмотреть пароль"
                        onClick={togglePasswordType}
                        src={passwordType ?
                            '../images/icons/login/eye-fill.svg'
                            : '../images/icons/login/eye-slash-fill.svg'}
                    />
                </div>

                <button className="btn" type="button"
                        onClick={handleLogin}>
                    Войти
                </button>
                <Link to="/password-recovery">Восстановить пароль</Link>
            </form>
        </div>
    )
}