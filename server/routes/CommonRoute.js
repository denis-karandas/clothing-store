const { Router } = require('express')
const router = Router()

const {
    getHeaderMenu
} = require('../controllers/CommonController')

router.get('/header-menu', getHeaderMenu)

module.exports = router
