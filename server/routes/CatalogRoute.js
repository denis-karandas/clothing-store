const { checkSchema } = require("express-validator")
const { Router } = require('express')
const router = Router()

const {
    getProducts,
    getProduct
} = require('../controllers/CatalogController')

const {
    getProductsValidator
} = require('../validators/CatalogValidator')

router.get('/', checkSchema(getProductsValidator), getProducts)

module.exports = router