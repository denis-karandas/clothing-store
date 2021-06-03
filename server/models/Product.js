const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    link: { type: String, required: true },
    active: { type: Boolean, default: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    section: {
        type: Schema.Types.ObjectId,
        ref: 'Section'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    filters: [{
        type: Schema.Types.ObjectId,
        ref: 'Filter'
    }],
    createdAt: { type: Date, default: Date.now() }
});

module.exports = model('Product', schema);