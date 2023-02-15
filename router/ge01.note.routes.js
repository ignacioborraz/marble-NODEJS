const { create,all,one,update,destroy } = require('../controllers/ge03.note.controller')

const router = require('express').Router()
const passport = require('../config/passport')
const addUserAndDone = require('../middlewares/addUserAndDone')

router.post('/',passport.authenticate('jwt', { session:false }),addUserAndDone,create)
router.get('/',passport.authenticate('jwt', { session:false }),all)
    
router.get('/:number_code',passport.authenticate('jwt', { session:false }),one)
router.put('/:id',passport.authenticate('jwt', { session:false }),update)
router.delete('/:id',passport.authenticate('jwt', { session:false }),destroy)

module.exports = router