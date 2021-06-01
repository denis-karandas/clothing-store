const { Router } = require('express')
const router = Router()

const {
    getWidgetProducts
} = require('../controllers/HomeController')

router.get('/top-sales', getWidgetProducts)
router.get('/new-products', getWidgetProducts)
router.get('/seasonal-offers', getWidgetProducts)

module.exports = router
