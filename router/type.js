const Router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    createType,getTypes,getOneType,getTypesFromCompany,putType,deleteType
} = require('../controllers/typeControllers')

Router.route('/')
    .get(passport.authenticate('jwt', {session:false}),getTypes)
    .post(passport.authenticate('jwt', {session:false}),createType)

Router.route('/cia/:id')
    .get(passport.authenticate('jwt', {session:false}),getTypesFromCompany)

Router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),getOneType)
    .put(passport.authenticate('jwt', {session:false}),putType)
    .delete(passport.authenticate('jwt', {session:false}),deleteType)

module.exports = Router