const app = require('./app')
require('./config/database')

const PORT = process.env.PORT || 4000

app.set('port',PORT)

app.listen(app.get('port'), () =>
    console.log('SERVER READY ON PORT: '+app.get('port'))
)