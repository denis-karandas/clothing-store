const Section = require('../models/Section')
const { transactionWrapper } = require('./BaseService')

exports.getAll = () => {
    return Section.find()
}

exports.getOne = id => {
    return Section.findById(id)
}

exports.getOneByPath = path => {
    return Section.findOne({ path })
}

exports.create = async data => {
    return await transactionWrapper(async (session) => {
        const section = new Section(data)
        return await section.save({ session })
    })
}

exports.update = async (id, data) => {
    return await transactionWrapper(async (session) => {
        return Section.findOneAndUpdate(id, data, { session })
    })
}

exports.deleteOne = async id => {
    return await transactionWrapper(async (session) => {
        return Section.findByIdAndDelete(id, { session })
    })
}