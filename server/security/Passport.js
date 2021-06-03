const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/User');

module.exports = async (passport) => {
    passport.use(
        'passport',
        new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET_KEY
        },
        async (jwtPayload, done) => {
            try {
                const { id } = jwtPayload;

                const user = await User.findById(id);
                if (!user) {
                    return done(null, false, 'User not found');
                }

                return done(null, user);
            }
            catch (e) {
                return done(e, false, e.message);
            }
        })
    )
}