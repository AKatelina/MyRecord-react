// @ts-ignore
import React, {Component} from "react";

import Cookies from "universal-cookie";
import axios from "axios";

export class ResetPassword extends Component <any, any> {
    constructor(props: any) {
        super(props);
        const cookies = new Cookies();
        this.state = {
            error: null,
            isLoaded: true,
            store: [],
            login: '',
            password: '',
            statusReset: false,



        };
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);



    }
    changeLogin(event){
        this.setState({login: event.target.value});
    }
    changePassword(event){
        this.setState({password: event.target.value});
    }
    componentDidMount() {



    }
    resetPassword() {

        const data = {email: this.state.login};
        axios({

            url: 'https://auth.cliclishop.ru/lk/password/reset',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data,
            // receive two    parameter endpoint url ,form data
        }).then(result => { // then print response status

            if(result.status == 204){
                this.setState({password: null});
                 window.location.assign('/');
            }
            if(result.status == 200){
                this.setState({password: null,statusReset: true});

            }

        })
    }


    render() {
        const {store, isLoaded} = this.state;

        if(isLoaded){
            return(
                <div className="container">


                    <div className="row justify-content-center">

                        <div className="col-xl-10 col-lg-12 col-md-9">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">

                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-5">Восстановление пароля</h1>
                                                </div>
                                                {this.state.statusReset?<h4 className="h4 text-gray-900 mb-5">Письмо отправлено на email</h4>: <form className="user">
                                                    <div className="form-group">
                                                        <input onChange={this.changeLogin} value={this.state.login} type="email" className="form-control form-control-user"
                                                               id="exampleInputEmail" aria-describedby="emailHelp"
                                                               placeholder="Введите email..."/>
                                                    </div>
                                                    <a ><div onClick={()=>this.resetPassword()} className="btn btn-primary btn-user btn-block mt-5">
                                                        Восстановить пароль
                                                    </div></a>

                                                </form>}

                                                <hr/>
                                                    <div className="text-center">
                                                        <a className="small" href="/login">Войти</a>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>)
        }
        else {
            return (<div>

                <div id="right_dark_space"></div>
                <div style={{width: 'calc(100% - 100px)'}} id="right_space">

                    <div className="preloader d-flex justify-content-center">
                        <div className="align-middle spinner-grow text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>

            </div>)
        }



    }
}

// @ts-ignore
export default ResetPassword;