const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    create,all,one,put,changeState,destroy
} = require('../controllers/plateControllers')

router.route('/')
    .get(passport.authenticate('jwt', {session:false}),all)
    .post(passport.authenticate('jwt', {session:false}),create)

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),one)
    .put(passport.authenticate('jwt', {session:false}),put)
    .delete(passport.authenticate('jwt', {session:false}),destroy)

router.route('/change/:id')
    .post(passport.authenticate('jwt', {session:false}),changeState)

module.exports = router