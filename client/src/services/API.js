import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

api.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
)

export const URL = {
    APP: {
        HEADER_MENU: '/app/header-menu'
    },
    CATALOG: {
        SEARCH: '/catalog'
    }
}

export default api;