// @ts-ignore
import React, {Component} from "react";
import MetaTags from 'react-meta-tags';
import Cookies from "universal-cookie";
import axios from "axios";

export class Login extends Component <any, any> {
    constructor(props: any) {
        super(props);
        const cookies = new Cookies();
        this.state = {
            error: null,
            errorM: null,
            isLoaded: true,
            store: [],
            login: '',
            password: '',


        };
        this.changeLogin = this.changeLogin.bind(this);
        this.changeError = this.changeError.bind(this);
        this.changePassword = this.changePassword.bind(this);


    }

    changeLogin(event) {
        this.setState({login: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    componentDidMount() {


    }
    changeError(status){
        this.setState({errorM: true});
    }
    LoginAuth() {
let errors = false;
        const data = {username: this.state.login, password: this.state.password};
        axios({

            url: 'https://auth.cliclishop.ru/api/login',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data,
            // receive two    parameter endpoint url ,form data
        })
            .then(result => { // then print response status
                errors = false
                console.log('+++++++')
            if (result.status == 204 || result.status == 200) {
                this.setState({password: null});
                window.location.assign('/');
            }

        }) .catch(error => {
            // this.changeError(true)
        })
    }


    render() {
        const {store, isLoaded, errorM} = this.state;


            return (
                <form className="form-sign">
                    <h1>ВХОД</h1>
                    <div>
                        <input id="phone" placeholder="Телефон / Email"/>
                            <label htmlFor="phone">Телефон или Email</label>
                    </div>
                    <div>
                        <input id="password" type="password" placeholder="Пароль"/>
                            <label htmlFor="password">Пароль</label>
                    </div>
                    <a className="btn" href="index.html">Войти</a>
                    <a className="link" href="password-recovery.html">Восстановление пароля</a>
                    <div className="wrapper">
                        <MetaTags>
                            <title>Регистрация</title>
                            <link href="/css/login.css?ver=2" rel="stylesheet"/>
                            <meta name="description" content="Some description." />
                            <meta property="og:title" content="MyApp" />
                            <meta property="og:image" content="path/to/image.jpg" />
                        </MetaTags>

                    </div>
                </form>)



    }
}

// @ts-ignore
export default Login;