import {createContext, useContext, useMemo} from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies();


    const login = async (data) => {
        axios({
            url: 'http://192.168.31.231:8092/api/login',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data
        }).then(result => {
            if (result.status === 204 || result.status === 200) {
                navigate('/');
            }
        }).catch(error => {
            // this.changeError(true)
        });
        // setCookies('token', 'i"m cookie from login'); // your token
        // setCookies('token', res.data.token); // your token
        // setCookies('name', res.data.name); // optional data
    };

    const registration = async (data) => {
        axios({
            url: 'http://192.168.31.231:8092/registration',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data,
        }).then(result => {
            if (result.status === 204 || result.status === 200) {
                login(data);
                navigate('/');
            }
        }).catch(error => {
            // this.changeError(true)
        });

        // setCookies('token', 'i"m cookie from registration'); // your token
        navigate('/');
    };

    // const login = async ({ email, password }) => {
    //     const res = await api.post('/auth', {
    //         email: email,
    //         password: password
    //     });
    //
    //     setCookies('token', res.data.token); // your token
    //     setCookies('name', res.data.name); // optional data
    //
    //     navigate('/home');
    // };

    const logout = () => {
        // ['token', 'name'].forEach(
        ['jwt_hp'].forEach(
            obj => removeCookie(obj)
        ); // remove data save in cookies
        navigate('/login');
    };

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout,
            registration
        }),
        [cookies]
    );

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(UserContext)
};