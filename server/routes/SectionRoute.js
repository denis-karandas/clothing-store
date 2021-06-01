const { Router } = require('express')
const { checkSchema } = require('express-validator')
const router = Router()

const {
    getSections,
    getSection,
    createSection,
    updateSection,
    deleteSection
} = require('../controllers/SectionController')
const validator = require('../validators/SectionValidator')

router.get('/', getSections)
router.get('/:id', checkSchema(validator.idSchema), getSection)
router.post('/', checkSchema(validator.dataSchema), createSection)
router.put('/:id', checkSchema({...validator.idSchema, ...validator.dataSchema}), updateSection)
router.delete('/:id', checkSchema(validator.idSchema), deleteSection)

module.exports = router
