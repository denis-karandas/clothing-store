const { Schema, model } = require('mongoose');

const schema = new Schema({
    type: { type: Number, required: true },
    name: { type: String, required: true },
    filters: [{
        type: Schema.Types.ObjectId,
        ref: 'Filter'
    }]
}, { collection: 'filters_groups' });

module.exports = model('FilterGroups', schema);