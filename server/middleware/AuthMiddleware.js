const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function(req, res, next) {
    if (req.method === 'OPTION') {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: 'User is not logged in' });
        }
        const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
        req.user = decoded;

        next();
    } catch (e) {
        return res.status(403).json({ message: 'User is not logged in' });
    }
}