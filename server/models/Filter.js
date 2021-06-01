const { Schema, model } = require('mongoose')

const schema = Schema({
    value: { type: String, require: true }
})

module.exports = model('Property', schema)