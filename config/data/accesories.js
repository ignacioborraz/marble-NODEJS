require('dotenv').config()
require('../database')
const Acc = require('../../models/Acc')

let accs = [

]

accs.forEach(acc => {
    Acc.create({
        code: acc.code,
        photo: acc.photo,
        description: acc.description
    })
})