const { firstName, lastName, email, password } = {
    firstName: {
        isString: true,
        isEmpty: false,
        isLength: {
            min: 6
        },
        in: [ 'body' ]
    },
    lastName: {
        isString: true,
        isLength: {
            min: 6
        },
        in: [ 'body' ]
    },
    email: {
        isString: true,
        isEmail: true,
        in: [ 'body' ]
    },
    password: {
        isString: true,
        isLength: {
            min: 6
        },
        in: [ 'body' ]
    }
}

const registration = { firstName, lastName, email, password };
const login = { email, password };

module.exports = {
    registration,
    login
}