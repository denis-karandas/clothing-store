const Category = require('../models/Category')
const { transactionWrapper } = require('./BaseService')

exports.getAll = () => {
    return Category.find()
}

exports.getOne = id => {
    return Category.findById(id)
}

exports.getOneByPath = path => {
    return Category.findOne({ path })
}

exports.create = async (data) => {
    return await transactionWrapper(async (session) => {
        const category = new Category(data)
        return await category.save({ session })
    })
}

exports.update = async (id, data) => {
    return await transactionWrapper(async (session) => {
        const category = await Category.findById(id)
        if (category) {
            Object.assign(category, data)
            await category.save({ session })

            return category
        }
        return null
    })
}

exports.deleteOne = async id => {
    return await transactionWrapper(async (session) => {
        return Category.findByIdAndDelete(id, { session })
    })
}