const idSchema = {
    id: {
        isString: true,
        isEmpty: false
    }
}

const dataSchema = {
    name: {
        isString: true
    },
    active: {
        isBoolean: true
    }
}

module.exports = {
    idSchema,
    dataSchema
}