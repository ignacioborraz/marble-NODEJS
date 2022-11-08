const mongoose = require('mongoose')

let dbConection = async () => {
    try {
        await mongoose.connect(
            process.env.CONECTION_MONGODB,{
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        )
        console.log('DATABASE CONNECTED')
    } catch {
        console.log(error.message)
    }
}

dbConection()