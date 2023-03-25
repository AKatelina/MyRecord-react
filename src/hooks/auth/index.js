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
            url: 'https://api.my-record.dev/api/login',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data
        })
            .then(result => {
                if (result.status === 204 || result.status === 200) {
                    navigate('/');
                }
            })
            .catch(error => {
            });
    };

    const registration = async (data) => {
        axios({
            url: 'https://api.my-record.dev/registration',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data,
        })
            .then(result => {
                if (result.status === 204 || result.status === 200) {
                    navigate('/');
                }
            })
            .catch(error => {
            });

    };


    const logout = () => {
        axios({
            url: 'https://api.my-record.dev/logout',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "GET"
        })
            .then(result => {
                if (result.status === 204 || result.status === 200) {
                    navigate('/');
                }
            })
            .catch(error => {
            });
    };

    const changePassword = async (data) => {
        axios({
            url: 'https://api.my-record.dev/api/lk/password/reset',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data
        })
            .then(result => {
                if (result.status === 204 || result.status === 200) {
                    navigate('/');
                }
            })
            .catch(error => {
            });
    };

    const sendPhoneCode = async (data) => {
        axios({
            url: 'https://api.my-record.dev/api/send-phone-kode',
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            method: "POST",
            data: data
        })
            .then(result => {
                if (result.status === 204 || result.status === 200) {
                    navigate('/');
                }
            })
            .catch(error => {
            });
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