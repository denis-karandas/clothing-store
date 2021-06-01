const { Router } = require('express')
const router = Router()
const { checkSchema } = require('express-validator')

const {
    registration,
    login
} = require('../controllers/AuthController')
const validator = require('../validators/AuthValidator')

router.post('/registration', checkSchema(validator.registration), registration)
router.post('/login', checkSchema(validator.login), login)

module.exports = router