const mongoose = require('mongoose')

mongoose.connect(process.env.CONECTION_MONGODB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(()=>console.log('DATABASE CONNECTED'))
.catch(err => console.error(err))