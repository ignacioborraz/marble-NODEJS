require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()
const logger = require('morgan')
const errorHandler = require('./middlewares/errorHandler')

const cors = require('cors')
const Router = require('./router/index')
const PORT = process.env.PORT || 4000

app.set('port',PORT)

app.use(cors())
app.use(express.json())
app.use('/api/marble', Router)
app.use(logger('dev'))
app.use(errorHandler)

app.listen(app.get('port'), () =>
    console.log('SERVER READY ON PORT: '+app.get('port'))
)