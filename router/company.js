const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    createCompany,getCompanies,getOneCompany,putCompany,deleteCompany
} = require('../controllers/companyControllers')

router.route('/')
    .get(getCompanies)
    .post(createCompany)
    
router.route('/:id')
    .get(getOneCompany)
    .put(putCompany)
    .delete(deleteCompany)

module.exports = router