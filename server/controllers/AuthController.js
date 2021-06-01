const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')

exports.registration = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Incorrect user data' })
        }

        const { firstName, lastName, email, password } = req.body

        const candidate = await User.findOne({ email })
        if (candidate) {
            return res.status(400).json({ message: `User with email '${email}' already exists` })
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({ firstName, lastName, email, password: hashPassword })
        await user.save()

        res.json({ message: 'User was created' })
    } catch (e) {
        res.send({ message: 'Server error' })
    }
}

exports.login = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Incorrect user data' })
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        const passwordIsValid = bcrypt.compareSync(password, user.password)
        if (!passwordIsValid) {
            return res.status(404).json({ message: 'User not found' })
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

        res.json({
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        })
    } catch (e) {
        res.send({ message: 'Server error' })
    }
}