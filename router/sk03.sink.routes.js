const { create,all,one,update,destroy } = require('../controllers/sk03.sink.controller')

const router = require('express').Router()
const passport = require('../config/passport')
//const isAdmin = require('../middlewares/isAdmin')

router.post('/',passport.authenticate('jwt', { session:false }),create)
router.get('/',passport.authenticate('jwt', { session:false }),all)
    
router.get('/:id',passport.authenticate('jwt', { session:false }),one)
router.put('/:id',passport.authenticate('jwt', { session:false }),update)
router.delete('/:id',passport.authenticate('jwt', { session:false }),destroy)

module.exports = router