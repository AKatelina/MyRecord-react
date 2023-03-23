import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function NewPassword() {
    const [newPasswordType, setNewPasswordType] = useState(true);
    const [repeatPasswordType, setRepeatPasswordType] = useState(true);

    function toggleNewPasswordType() {
        setNewPasswordType(!newPasswordType)
    }

    function toggleRepeatPasswordType() {
        setRepeatPasswordType(!repeatPasswordType)
    }

    return (
        <div>
            <form>
                <h1>СОЗДАНИЕ НОВОГО&nbsp;ПАРОЛЯ</h1>

                <div className="password-toggle-input">
                    <input id="new-password"
                           type={newPasswordType ? 'password' : 'text'}
                           placeholder="Новый пароль"
                           autoFocus/>
                    <label htmlFor="new-password" hidden>Новый пароль</label>
                    <img onClick={toggleNewPasswordType}
                         className="eye-open-icon"
                         src={newPasswordType ?
                             '../images/icons/login/eye-fill.svg'
                             : '../images/icons/login/eye-slash-fill.svg'}
                         alt="Посмотреть пароль"/>
                </div>

                <div className="password-toggle-input">
                    <input id="new-password-repeat"
                           type={repeatPasswordType ? 'password' : 'text'}
                           placeholder="Повторите пароль"/>
                    <label htmlFor="new-password-repeat" hidden>Повторите пароль</label>
                    <img onClick={toggleRepeatPasswordType}
                         className="eye-open-icon"
                         src={repeatPasswordType ?
                             '../images/icons/login/eye-fill.svg'
                             : '../images/icons/login/eye-slash-fill.svg'}
                         alt="Посмотреть пароль"/>
                </div>

                <Link className="btn" to="/login">Сохранить</Link>
            </form>
        </div>
    )
}