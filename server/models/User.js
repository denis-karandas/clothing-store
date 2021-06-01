const { Schema, model } = require('mongoose')

const schema = Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    phone: { type: String }
})

module.exports = model('User', schema)