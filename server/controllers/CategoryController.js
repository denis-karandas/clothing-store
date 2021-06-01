const { validationResult } = require('express-validator')
const CategoryService = require('../services/CategoryService')

exports.getCategories = async (req, res) => {
    try {
        const categories = await CategoryService.getAll()

        res.status(200).json(categories)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.getCategory = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const id = req.params?.id

        const category = await CategoryService.getOne(id)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.createCategory = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const data = {
            name: req.body?.name,
            active: req.body?.active,
            path: req.body?.path
        }

        const candidate = await CategoryService.getOneByPath(data.path)
        if (candidate) {
            return res.status(400).json({message: `Category with path '${data.path}' already exists`})
        }

        const category = await CategoryService.create(data)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const id = req.params?.id
        const data = {
            name: req.body?.name,
            active: req.body?.active,
            path: req.body?.path
        }

        const category = await CategoryService.update(id, data)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const id = req.params?.id

        const category = await CategoryService.deleteOne(id)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}