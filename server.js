require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()

const cors = require('cors')
const Router = require('./routes')
const PORT = process.env.PORT || 4000

app.set('port',PORT)

app.use(cors())
app.use(express.json())
app.use('/api/marble', Router)

app.listen(app.get('port'), () =>
    console.log('SERVER READY IN PORT: '+app.get('port'))
)