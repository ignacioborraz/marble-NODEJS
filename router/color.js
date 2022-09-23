const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    createColor,getColors,getOneColor,getColorsFromCompany,putColor,deleteColor
} = require('../controllers/colorControllers')

router.route('/')
    .get(passport.authenticate('jwt', {session:false}),getColors)
    .post(passport.authenticate('jwt', {session:false}),createColor)

router.route('/cia/:id')
    .get(passport.authenticate('jwt', {session:false}),getColorsFromCompany)

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),getOneColor)
    .put(passport.authenticate('jwt', {session:false}),putColor)
    .delete(passport.authenticate('jwt', {session:false}),deleteColor)

module.exports = router