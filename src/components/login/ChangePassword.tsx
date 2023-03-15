// @ts-ignore
import React, {Component} from "react";
// import Menu from "../menu/Menu";
import Cookies from "universal-cookie";
import axios from "axios";

export class ChangePassword extends Component <any, any> {
    constructor(props: any) {
        super(props);
        const cookies = new Cookies();
        this.state = {
            error: null,
            isLoaded: true,
            store: [],
            login: '',
            password1: '',
            password2: '',


        };

        this.changePassword1 = this.changePassword1.bind(this);
        this.changePassword2 = this.changePassword2.bind(this);


        console.log(window.location)
    }

    changePassword1(event) {
        this.setState({password1: event.target.value});
    }

    changePassword2(event) {
        this.setState({password2: event.target.value});
    }

    componentDidMount() {


    }

    LoginAuth() {
        if (this.state.password1 == this.state.password2) {
            const data = {password: this.state.password1};
            axios({

                url: 'https://auth.cliclishop.ru/lk/password/reset/email/' + this.props.email + '/' + this.props.hash,
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
                method: "POST",
                data: data,
                // receive two    parameter endpoint url ,form data
            }).then(result => { // then print response status

                if (result.status == 204) {
                    this.setState({password: null});
                    window.location.assign('/login');
                }
                if (result.status == 200) {
                    this.setState({password: null});
                    window.location.assign('/login');
                }

            })
        }

    }


    render() {
        const {store, isLoaded} = this.state;
        if (isLoaded) {
            return (
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
                                                    <h1 className="h4 text-gray-900 mb-5">Добро пожаловать!</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input onChange={this.changePassword1}
                                                               value={this.state.password1} type="password"
                                                               className="form-control form-control-user"
                                                               id="exampleInputEmail" aria-describedby="emailHelp"
                                                               placeholder="Новый пароль"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input onChange={this.changePassword2}
                                                               value={this.state.password2} type="password"
                                                               className="form-control form-control-user"
                                                               id="exampleInputPassword"
                                                               placeholder="Повторите пароль"/>
                                                    </div>
                                                    {/*<div className="form-group">*/}
                                                    {/*    <div className="custom-control custom-checkbox small">*/}
                                                    {/*        <input type="checkbox" className="custom-control-input"*/}
                                                    {/*               id="customCheck"/>*/}
                                                    {/*            <label className="custom-control-label"*/}
                                                    {/*                   htmlFor="customCheck">Запомнить пароль</label>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    <a>
                                                        <div onClick={() => this.LoginAuth()}
                                                             className="btn btn-primary btn-user btn-block mt-5">
                                                            Изменить пароль
                                                        </div>
                                                    </a>

                                                </form>
                                                <hr/>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>)
        } else {
            return (<div>
                {/*<Menu/>*/}
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
export default ChangePassword;