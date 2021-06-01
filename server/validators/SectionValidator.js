const { id, name, active } = {
    id: {
        isString: true,
        isEmpty: false
    },
    name: {
        isString: true
    },
    active: {
        isBoolean: true
    }
}

const idSchema = { id }
const dataSchema = { name, active }

module.exports = {
    idSchema,
    dataSchema
}