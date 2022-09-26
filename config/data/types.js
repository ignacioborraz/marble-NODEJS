require('dotenv').config()
require('../database')
const Type = require('../../models/Type')

let types = [
    {
        "name": "Standard",
        "height": 140,
        "width": 300,
        "thickness": 12,
        "company": "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        "name": "Jumbo",
        "height": 160,
        "width": 320,
        "thickness": 12,
        "company": "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        "name": "Standard",
        "height": 140,
        "width": 300,
        "thickness": 12,
        "company": "62e5fe3be3ef843cb2fd1a44"
    },
    {
        "name": "Jumbo",
        "height": 160,
        "width": 320,
        "thickness": 12,
        "company": "62e5fe3be3ef843cb2fd1a44"
    },
    {
        "name": "Media Placa",
        "height": 72,
        "width": 320,
        "thickness": 12,
        "company": "62e5fe59e3ef843cb2fd1a46"
    },
    {
        "name": "Placa Entera",
        "height": 144,
        "width": 320,
        "thickness": 12,
        "company": "62e5fe59e3ef843cb2fd1a46"
    },
    {
        "name": "Media Placa",
        "height": 80,
        "width": 320,
        "thickness": 12,
        "company": "62e5fee1e3ef843cb2fd1a48"
    },
    {
        "name": "Placa Entera",
        "height": 160,
        "width": 320,
        "thickness": 12,
        "company": "62e5fee1e3ef843cb2fd1a48"
    }
]

types.forEach(type => {
    Type.create({
        name: type.name,
        height: type.height,
        width: type.width,
        thickness: type.thickness,
        company: type.company,
    })
})