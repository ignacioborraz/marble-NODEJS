const Router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('./config/passport')

const {signUp,signIn,signOut,verifyToken,getUsers,getOneUser,putUser,deleteUser} = require('./controllers/userControllers')

Router.route('/auth')
    .get(getUsers)

Router.route('/auth/:id')
    .get(passport.authenticate('jwt', {session:false}),getOneUser)
    .put(passport.authenticate('jwt', {session:false}),putUser)
    .delete(passport.authenticate('jwt', {session:false}),deleteUser)

Router.route('/auth/sign/up')
    .post(signUp)

Router.route('/auth/sign/in')
    .post(signIn)

Router.route('/auth/sign/out')
    .post(signOut)

Router.route('/auth/sign/token')
    .get(passport.authenticate('jwt', {session:false}),verifyToken)

const {createCompany,getCompanies,getOneCompany,putCompany,deleteCompany} = require('./controllers/companyControllers')

Router.route('/company')
    .get(getCompanies)
    .post(createCompany)

Router.route('/company/:id')
    .get(getOneCompany)
    .put(putCompany)
    .delete(deleteCompany)

const {createColor,getColors,getOneColor,getColorsFromCompany,putColor,deleteColor} = require('./controllers/colorControllers')

Router.route('/color')
    .get(getColors)
    .post(createColor)

Router.route('/colors/:id')
    .get(getColorsFromCompany)

Router.route('/color/:id')
    .get(getOneColor)
    .put(putColor)
    .delete(deleteColor)

const {createType,getTypes,getOneType,getTypesFromCompany,putType,deleteType} = require('./controllers/typeControllers')

Router.route('/type')
    .get(getTypes)
    .post(createType)

Router.route('/types/:id')
    .get(getTypesFromCompany)

Router.route('/type/:id')
    .get(getOneType)
    .put(putType)
    .delete(deleteType)

const {createState,getStates,getOneState,putState,deleteState} = require('./controllers/stateControllers')

Router.route('/state')
    .get(getStates)
    .post(createState)

Router.route('/state/:id')
    .get(getOneState)
    .put(putState)
    .delete(deleteState)

const {createPlate,createLotsOfPlates,getPlates,getOnePlate,putPlate,changeState,deletePlate} = require('./controllers/plateControllers')

Router.route('/plate')
    .get(getPlates)
    .post(createPlate)

    Router.route('/plates')
    .post(createLotsOfPlates)

Router.route('/plate/:id')
    .get(getOnePlate)
    .put(putPlate)
    .delete(deletePlate)

Router.route('/plate/state/:id')
    .post(changeState)

module.exports = Router //exporto el modulo