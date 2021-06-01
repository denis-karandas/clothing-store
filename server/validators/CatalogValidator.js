exports.getProductsValidator = {
    section: {
        isString: true,
        isEmpty: false,
        in: [ 'query' ],
    },
    search: {
        isString: true
    },
    page: {
        isNumeric: true,
        in: [ 'query' ],
    },
    limit: {
        isNumeric: true,
        in: [ 'query' ],
    },
    sortBy: {
        isNumeric: true,
        in: [ 'query' ],
    }
}