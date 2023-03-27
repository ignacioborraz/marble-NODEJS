const { create,all,one,update,pushData,pullData,destroy,next,getAll } = require('../controllers/note.controller')

const router = require('express').Router()
const passport = require('../config/passport')
const addUserAndDone = require('../middlewares/addUserAndDone')

router.post('/',passport.authenticate('jwt', { session:false }),addUserAndDone,create)
router.get('/',passport.authenticate('jwt', { session:false }),all)
router.get('/all',passport.authenticate('jwt', { session:false }),getAll)

router.get('/next',passport.authenticate('jwt', { session:false }),next)
router.get('/:number_code',passport.authenticate('jwt', { session:false }),one)
router.put('/:id',passport.authenticate('jwt', { session:false }),update)
router.put('/push/:id',passport.authenticate('jwt', { session:false }),pushData)
router.put('/pull/:id',passport.authenticate('jwt', { session:false }),pullData)
router.delete('/:id',passport.authenticate('jwt', { session:false }),destroy)

module.exports = router