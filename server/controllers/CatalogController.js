const CatalogService = require('../services/CatalogService')
const Product = require('../models/Product')
const { validationResult } = require('express-validator')


exports.getProducts = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const section = req.query.section
        const category = req.query.category
        const page = +req.query.page
        const limit = +req.query.limit
        const sortBy = +req.query.sortBy

        const products = await CatalogService.search({
            section,
            category,
            filters: [
                {
                    type: 'LIKE',
                    name: 'name',
                    value: req.query.search,
                },
                {
                    type: 'OR',
                    name: 'filters.value',
                    value: req.query.size,
                },
                {
                    type: 'OR',
                    name: 'filters.value',
                    value: req.query.color,
                }
            ],
            pagination: { page, limit },
            sortBy
        })

        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}