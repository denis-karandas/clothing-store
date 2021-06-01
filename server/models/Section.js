const { Schema, model } = require('mongoose')

const schema = Schema({
    name: { type: String, require: true },
    active: { type: Boolean, require: true },
    path: { type: String, require: true },
    special: { type: Boolean, require: true },
    categoryGroups: [{
        name: { type: String, require: true },
        list: [{
            type: Schema.Types.ObjectId,
            ref: 'Catalog',
        }]
    }]
})

module.exports = model('Section', schema)