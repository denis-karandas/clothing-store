import axios from 'axios'

const domain = 'http://localhost:3000'

export default class HomeAPI {
    static fetchTopSales = () => axios.get(`${domain}/api/home/top-sales`).then(items => items.data)
    static fetchNewProducts = () => axios.get(`${domain}/api/home/new-products`).then(items => items.data)
    static fetchSeasonalOffers = () => axios.get(`${domain}/api/home/seasonal-offers`).then(items => items.data)
}