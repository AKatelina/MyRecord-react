import React from 'react';
import {Link} from 'react-router-dom';

function NewPassword() {
    return (
        <div>
            <form>
                <h1>СОЗДАНИЕ НОВОГО&nbsp;ПАРОЛЯ</h1>
                <div>
                    <input id="new-password" type="password" placeholder="Новый пароль" autoFocus/>
                    <label htmlFor="new-password" hidden>Новый пароль</label>
                </div>
                <div>
                    <input id="new-password-repeat" type="password" placeholder="Повторите пароль"/>
                    <label htmlFor="new-password-repeat" hidden>Повторите пароль</label>
                </div>
                <Link className="btn" to="/security/login">Сохранить</Link>
            </form>
        </div>
    );
}

export default NewPassword;