const { create,all,one,update,pullData,destroy,next } = require('../controllers/ge02.code.controller')

const router = require('express').Router()
const passport = require('../config/passport')

router.route('/next')
    .get(passport.authenticate('jwt', {session:false}),next)

router.route('/')
    .get(passport.authenticate('jwt', {session:false}),all)
    .post(passport.authenticate('jwt', {session:false}),create)

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),one)
    .put(passport.authenticate('jwt', {session:false}),update)
    .delete(passport.authenticate('jwt', {session:false}),destroy)

router.route('/pull/:id')
    .patch(passport.authenticate('jwt', {session:false}),pullData)


module.exports = router