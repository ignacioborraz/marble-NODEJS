const app = require('./app')
require('./config/database')

const PORT = process.env.PORT || 8000

app.set('port',PORT)

app.listen(app.get('port'), () =>
    console.log('server ready on port: '+app.get('port'))
)