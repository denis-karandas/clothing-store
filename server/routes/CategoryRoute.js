const { Router } = require('express');
const { checkSchema } = require('express-validator');
const router = Router();

const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/CategoryController');

const {
    idSchema,
    dataSchema
} = require('../validators/CategoryValidator');

router.get('/', getCategories);
router.get('/:id', checkSchema(idSchema), getCategory);
router.post('/', checkSchema(dataSchema), createCategory);
router.put('/:id', checkSchema({...idSchema, ...dataSchema}), updateCategory);
router.delete('/:id', checkSchema(idSchema), deleteCategory);

module.exports = router;
