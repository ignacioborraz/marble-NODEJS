const { create,all,one,update,destroy,changeState } = require('../controllers/pl05.plate.controller')

const router = require('express').Router()
const passport = require('../config/passport')
const isAdmin = require('../middlewares/isAdmin')

router.post('/',passport.authenticate('jwt', { session:false }),create)
router.get('/',passport.authenticate('jwt', { session:false }),all)
    
router.get('/:id',passport.authenticate('jwt', { session:false }),one)
router.put('/:id',passport.authenticate('jwt', { session:false }),isAdmin,update)
router.delete('/:id',passport.authenticate('jwt', { session:false }),isAdmin,destroy)

router.post('/change/:id',passport.authenticate('jwt', { session:false }),isAdmin,changeState)

module.exports = router