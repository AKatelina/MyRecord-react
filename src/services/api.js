import axios from 'axios';

const api = axios.create({
    baseURL: "https://my-record.dev:3000/" //your api URL
});

export default api;