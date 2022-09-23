const router = require('express').Router()

const authRouter = require('./auth')
const companyRouter = require('./company')
const colorRouter = require('./color')
const typeRouter = require('./type')
const stateRouter = require('./state')
const plateRouter = require('./plate')
const accesoryRouter = require('./accesory')
const jhonsonRouter = require('./jhonson')

router.use('/auth',authRouter)
router.use('/company',companyRouter)
router.use('/color',colorRouter)
router.use('/type',typeRouter)
router.use('/state',stateRouter)
router.use('/plate',plateRouter)
router.use('/accesory',accesoryRouter)
router.use('/jhonson',jhonsonRouter)

module.exports = router