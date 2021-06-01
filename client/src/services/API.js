import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

api.interceptors.response.use(
    (res) => res.data,
    (error) => error
)

export const URL = {
    COMMON: {
        HEADER_MENU: '/api/common/header-menu'
    }
}

export default api