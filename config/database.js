const mongoose = require('mongoose')

let dbConection = async () => {
    try {
        await mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.CONECTION_MONGODB)
        console.log('database connected')
    } catch {
        console.log(error.message)
    }
}

dbConection()