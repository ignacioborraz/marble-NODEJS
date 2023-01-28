const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/User')

module.exports = passport.use(
    new jwtStrategy(
        {jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY},
        async (jwt_payload,done) => {
            try {
                const user = await User.findOne({_id:jwt_payload.id})
                console.log(user)
                return done(null, user)
            } catch(error) {
                console.log(error)
                return done(null,false)
            }
        }
))