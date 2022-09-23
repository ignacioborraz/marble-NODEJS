const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    createPlate,getPlates,getOnePlate,putPlate,changeState,deletePlate
} = require('../controllers/plateControllers')

router.route('/')
    .get(passport.authenticate('jwt', {session:false}),getPlates)
    .post(passport.authenticate('jwt', {session:false}),createPlate)

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),getOnePlate)
    .put(passport.authenticate('jwt', {session:false}),putPlate)
    .delete(passport.authenticate('jwt', {session:false}),deletePlate)

router.route('/change/:id')
    .post(passport.authenticate('jwt', {session:false}),changeState)

module.exports = router