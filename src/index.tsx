import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home/Home";
import Registration from "./components/registration/Registration";
import Security from "./components/login/Security";




const cookies = new Cookies();

ReactDOM.render(
    <Router>

        <Switch>
            {/*<Route path="/" children={<Global />} />*/}
            <Route path="/registration/" children={<RegistrationFunc/>}/>
            <Route path="/login" children={<LoginFunc/>}/>
            <Route path="/" children={<RegistrationFunc/>}/>

        </Switch>
    </Router>,
    document.getElementById('root')
);

function CompanyAllFunc() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    // let {widgetId, idCity} = useParams();

    return <Home />;
}function RegistrationFunc() {


    return <Security block={'registration'}/>;
}
function LoginFunc() {


    return <Security block={'login'}/>;
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
