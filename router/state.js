const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    createState,getStates,getOneState,putState,deleteState
} = require('../controllers/stateControllers')

router.route('/')
    .get(getStates)
    .post(createState)

router.route('/:id')
    .get(getOneState)
    .put(putState)
    .delete(deleteState)

module.exports = router