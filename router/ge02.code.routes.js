const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    create,all,one,update,destroy
} = require('../controllers/ge02.code.controller')

router.route('/')
    .get(passport.authenticate('jwt', {session:false}),all)
    .post(passport.authenticate('jwt', {session:false}),create)

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),one)
    .put(passport.authenticate('jwt', {session:false}),update)
    .delete(passport.authenticate('jwt', {session:false}),destroy)

module.exports = router