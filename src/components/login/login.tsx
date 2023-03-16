import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div>
            <form>
                <h1>ВХОД</h1>
                <div>
                    <input id="email" placeholder="Email" autoFocus required/>
                    <label htmlFor="email" hidden>Email</label>
                </div>
                <div className="password-toggle-input">
                    <input id="password" type="password" placeholder="Пароль" required/>
                    <label htmlFor="password" hidden>Пароль</label>
                    <img className="eye-open-icon" src="../images/icons/login/eye-fill.svg" alt="Посмотреть пароль"/>
                    <img className="eye-close-icon hide" src="../images/icons/login/eye-slash-fill.svg"
                         alt="Посмотреть пароль"/>
                </div>
                <Link className="btn" to="/security/login">Войти</Link>
                <Link to="/security/password-recovery">Восстановить пароль</Link>
            </form>
        </div>
    );
}

export default Login;