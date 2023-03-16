import React from 'react';
import {Link} from 'react-router-dom';

function Registration() {
    return (
        <div>
            <form>
                <h1>РЕГИСТРАЦИЯ</h1>
                <div>
                    <input id="registration-mail" type="email" placeholder="Email"/>
                    <label htmlFor="registration-mail" hidden>Почта</label>
                </div>
                <div>
                    <input id="registration-password" type="password" placeholder="Пароль"/>
                    <label htmlFor="registration-password" hidden>Пароль</label>
                </div>
                <div>
                    <input id="registration-password-repeat" type="password" placeholder=" Повторите пароль"/>
                    <label htmlFor="registration-password-repeat" hidden>Повторите пароль</label>
                </div>
                <div className="checkbox-wrap">
                    <label htmlFor="registration-agreement" hidden>Соглашение</label>
                    <input id="registration-agreement" type="checkbox"/>
                    <span>Я&nbsp;принимаю</span>
                    <a href="#">условия лицензионного договора</a>
                    <span>и&nbsp;разрешаю </span>
                    <a href="#">обработку персональных данных</a>
                </div>
                <Link className="btn" to="/security/login">Зарегистрироваться</Link>
            </form>
        </div>
    );
}

export default Registration;