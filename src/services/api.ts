import axios from 'axios';

const api = axios.create({
    baseURL: '192.168.1.107:4000'
});

export default api;