const { create,all,one,update,destroy } = require('../controllers/au02.client.controller')
const schema = require('../schemas/client')

const validator = require('../middlewares/validator')
const passport = require('../config/passport')
const isAdmin = require('../middlewares/isAdmin')
const router = require('express').Router()

router.post('/',passport.authenticate('jwt', { session:false }),isAdmin,validator(schema),create)
router.get('/',passport.authenticate('jwt', { session:false }),all)
    
router.get('/:id',passport.authenticate('jwt', { session:false }),one)
router.put('/:id',passport.authenticate('jwt', { session:false }),isAdmin,update)
router.delete('/:id',passport.authenticate('jwt', { session:false }),isAdmin,destroy)

module.exports = router