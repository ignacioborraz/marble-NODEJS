const router = require('express').Router()

const authRouter = require('./au01.user.routes')
router.use('/auth',authRouter)
const clientRouter = require('./au02.client.routes')
router.use('/clients',clientRouter)

const companyRouter = require('./pl01.company.routes')
router.use('/company',companyRouter)
const colorRouter = require('./pl02.color.routes')
router.use('/color',colorRouter)
const typeRouter = require('./pl03.type.routes')
router.use('/type',typeRouter)
const stateRouter = require('./pl04.state.routes')
router.use('/state',stateRouter)
const plateRouter = require('./pl05.plate.routes')
router.use('/plate',plateRouter)

const jhonsonRouter = require('./sk01.ksink.routes')
router.use('/ksink',jhonsonRouter)
const accesoryRouter = require('./sk02.accesory.routes')
router.use('/accesory',accesoryRouter)

const codeRouter = require('./note.routes')
router.use('/note',codeRouter)

module.exports = router