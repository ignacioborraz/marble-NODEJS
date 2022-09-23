const Router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    createPlate,getPlates,getLastStateOfPlates,getOnePlate,putPlate,changeState,deletePlate
} = require('../controllers/plateControllers')

Router.route('/')
    .get(passport.authenticate('jwt', {session:false}),getPlates)
    .post(passport.authenticate('jwt', {session:false}),createPlate)

Router.route('/lasts')
    .get(passport.authenticate('jwt', {session:false}),getLastStateOfPlates)

Router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),getOnePlate)
    .put(passport.authenticate('jwt', {session:false}),putPlate)
    .delete(passport.authenticate('jwt', {session:false}),deletePlate)

Router.route('/change/:id')
    .post(passport.authenticate('jwt', {session:false}),changeState)

module.exports = Router