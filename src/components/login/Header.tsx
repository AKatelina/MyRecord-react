import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {Link} from "react-router-dom";
class Header extends Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            feedbackname: 'Данное поле должно быть заполнено',
            feedbacknameClass: 'form-control is-invalid',
            feedbacksurname: '',
            feedbackphone: 'Данное поле должно быть заполнено',
            feedbackphoneClass: 'form-control is-invalid',
            surname: '',


        };

        console.log('090');
        console.log('878')
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);

        this.handleChangeDateOrder = this.handleChangeDateOrder.bind(this);


    }

    handleChangeAddress(event) {
        this.setState({address: event.target.value});
    }

    handleChangeDateOrder(event) {
        this.setState({dateOrder: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value, feedbackphoneClass: 'form-control is-valid'});
        if (event.target.value == '') {
            this.setState({
                feedbackphone: 'Укажите полный номер начиная с 8',
                feedbackphoneClass: 'form-control is-invalid'
            });
        }
        if (event.target.value.search(/\d/) == -1) {
            this.setState({
                feedbackphone: 'Данное поле должно содержать только цифры',
                feedbackphoneClass: 'form-control is-invalid'
            });
        }
        if (event.target.value.length < 11) {
            this.setState({
                feedbackphone: 'Укажите полный номер начиная с 8',
                feedbackphoneClass: 'form-control is-invalid'
            });
        }
    }

    handleChangeSurname(event) {
        this.setState({surname: event.target.value});
        if (event.target.value == '') {
            this.setState({feedbacksurname: 'Данное поле должно быть заполнено'});
        }
        if (event.target.value.search(/\d/) != -1) {
            this.setState({feedbacksurname: 'Данное поле должно содержать только буквы'});
        }
    }

    handleChangeName(event) {
        this.setState({name: event.target.value, feedbackname: '', feedbacknameClass: 'form-control is-valid'});
        if (event.target.value == '') {
            this.setState({
                feedbackname: 'Данное поле должно быть заполнено'
                , feedbacknameClass: 'form-control is-invalid'
            });
        }
        if (event.target.value.search(/\d/) != -1) {
            this.setState({
                feedbackname: 'Данное поле должно содержать только буквы',
                feedbacknameClass: 'form-control is-invalid'
            });
        }
    }














    componentDidMount() {
        // let urlAPI = 'https://api.cliclishop.ru/lk/api/widget/customization/' + this.state.idShop;
        //
        // fetch(urlAPI)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //
        //             console.log('result')
        //             console.log(result.shop[0])
        //             this.setState(
        //                 {
        //                     customization: result.settings.settings,
        //                     shopCompany: result.shop,
        //                     isLoaded: true,
        //                     shopCompanyActive: result.shop[0].id,
        //                     ActiveShop: result.shop[0],
        //
        //                 });
        //
        //         },
        //         // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        //         // чтобы не перехватывать исключения из ошибок в самих компонентах.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: false,
        //                 error
        //             });
        //         }
        //     )


    }



    render() {
        return (
            <div className="header">
                <div className="page-max-w">

                    <Link className="logo-text" to="/">МоиЗаписи</Link>
                    <Link className="log-link" to="/login">Вход</Link>
                    <Link className="log-link" to="/registration">Регистрация</Link>
                </div>
            </div>
        )


    }
}

export default Header;