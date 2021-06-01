const { validationResult } = require('express-validator')
const SectionService = require('../services/SectionService')

exports.getSections = async (req, res) => {
    try {
        const categories = await SectionService.getAll()

        res.status(200).json(categories)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.getSection = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const id = req.params?.id

        const category = await SectionService.getOne(id)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.createSection = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const data = {
            name: req.body?.name,
            active: req.body?.active,
            path: req.body?.path,
            special: req.body?.special
        }

        const categoryGroups = req.body?.categoryGroups
        if (categoryGroups) {
            data.categoryGroups = categoryGroups
        }

        const candidate = await SectionService.getOneByPath(data.path)
        if (candidate) {
            return res.status(400).json({message: `Section with path '${data.path}' already exists`})
        }

        const category = await SectionService.create(data)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.updateSection = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const id = req.params?.id
        const data = {
            name: req.body?.name,
            active: req.body?.active,
            path: req.body?.path,
            special: req.body?.special
        }

        const categoryGroups = req.body?.categoryGroups
        if (categoryGroups) {
            data.categoryGroups = categoryGroups
        }

        const category = await SectionService.update(id, data)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}

exports.deleteSection = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors)
        }

        const id = req.params?.id

        const category = await SectionService.deleteOne(id)

        res.status(200).json(category)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}