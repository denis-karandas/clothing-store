const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    active: { type: Boolean, required: true },
    path: { type: String, required: true }
});

module.exports = model('Category', schema);