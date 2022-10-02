const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    create,get,one,put,destroy
} = require('../controllers/colorControllers')

router.route('/')
    .get(passport.authenticate('jwt', {session:false}),get)
    .post(passport.authenticate('jwt', {session:false}),create)

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),one)
    .put(passport.authenticate('jwt', {session:false}),put)
    .delete(passport.authenticate('jwt', {session:false}),destroy)

module.exports = router