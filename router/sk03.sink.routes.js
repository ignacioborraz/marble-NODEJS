const { create,all,one,update,destroy } = require('../controllers/sk03.sink.controller')

const router = require('express').Router()
const passport = require('../config/passport')
const isAdmin = require('../middlewares/isAdmin')

router.post('/',passport.authenticate('jwt', { session:false }),isAdmin,create)
router.get('/',passport.authenticate('jwt', { session:false }),all)
    
router.get('/:id',passport.authenticate('jwt', { session:false }),one)
router.put('/:id',passport.authenticate('jwt', { session:false }),isAdmin,update)
router.delete('/:id',passport.authenticate('jwt', { session:false }),isAdmin,destroy)

module.exports = router