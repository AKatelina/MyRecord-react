import React from 'react';
import {Link} from 'react-router-dom';

export default function PasswordRecovery() {
    return (
        <div>
            <form>
                <h1>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>

                <div>
                    <input id="email-to-recover" type="email" placeholder="Email" autoFocus/>
                    <label htmlFor="email-to-recover" hidden>Email</label>
                </div>

                <Link className="btn" to="/new-password">Отправить ссылку восстановления</Link>
            </form>
        </div>
    )
}