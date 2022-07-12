const Router = require('express').Router()
//const validator = require('./config/validator')
//const passport = require('./config/passport')

const {createCompany,getCompanies,getOneCompany,putCompany,deleteCompany} = require('./controllers/companyControllers')

Router.route('/company')
    .get(getCompanies)
    .post(createCompany)

Router.route('/company/:id')
    .get(getOneCompany)
    .put(putCompany)
    .delete(deleteCompany)

const {createPlate,getPlates,getOnePlate,putPlate,deletePlate} = require('./controllers/plateControllers')

Router.route('/plate')
    .get(getPlates)
    .post(createPlate)

Router.route('/plate/:id')
    .get(getOnePlate)
    .put(putPlate)
    .delete(deletePlate)

module.exports = Router //exporto el modulo