require('dotenv').config()
require('../database')
const Sink = require('../../models/Sink')
const Stock = require('../../models/Stock')
const Code = require('../../models/Code')

let stock = [
    {
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be55f",
            order: 1,
            code: "LUXOR SI85A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si85.jpg?alt=media&token=39ee3aa0-1292-4a13-94db-c543d1a1248e",
            x: 85.5,
            y: 48.2,
            z: 21,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        instalation: [
            "monocomando"
        ],
        user: "631666a420381a9634e219b9",
        __v: 0,
        quantity: 1,
        internal: null,
        note: "2080",
        done: false,
        comments: "DIKA"
    },
    {
        internal: null,
        note: "2077",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be575",
            order: 85,
            code: "R63/18",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
            x: 63.8,
            y: 37,
            z: 18,
            instalation: [],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "Gabriela Ende",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "2063",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be55d",
            order: 3,
            code: "LUXOR COMPACT SI71A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si71.jpg?alt=media&token=e63450b7-be05-4622-9577-5790bd151076",
            x: 71,
            y: 48,
            z: 21,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "monocomando",
            "dosificador"
        ],
        comments: "Carla Berrini - C/mono y dosif.",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "2025",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be575",
            order: 85,
            code: "R63/18",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
            x: 63.8,
            y: 37,
            z: 18,
            instalation: [],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "Olga",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1938",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be53c",
            order: 70,
            code: "C28/18",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
            x: 59.8,
            y: 34,
            z: 18,
            instalation: [],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "Federico Navarro",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1886",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be543",
            order: 7,
            code: "CURVE SI77A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fcurve.jpg?alt=media&token=9700180e-9fca-491c-abcf-c07741d69ac8",
            x: 77,
            y: 43,
            z: 20,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "German Steel",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1816",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be55d",
            order: 3,
            code: "LUXOR COMPACT SI71A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si71.jpg?alt=media&token=e63450b7-be05-4622-9577-5790bd151076",
            x: 71,
            y: 48,
            z: 21,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "monocomando",
            "dosificador"
        ],
        comments: "Vanesa Solis",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1770",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be57e",
            order: 49,
            code: "Z52",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
            x: 52,
            y: 32,
            z: 15,
            instalation: [],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "Virgia Corpus",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1711",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be543",
            order: 7,
            code: "CURVE SI77A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fcurve.jpg?alt=media&token=9700180e-9fca-491c-abcf-c07741d69ac8",
            x: 77,
            y: 43,
            z: 20,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "Laura Sanchez",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1711",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be543",
            order: 7,
            code: "CURVE SI77A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fcurve.jpg?alt=media&token=9700180e-9fca-491c-abcf-c07741d69ac8",
            x: 77,
            y: 43,
            z: 20,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "Laura Sanchez - tiene dos",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1481",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be55d",
            order: 3,
            code: "LUXOR COMPACT SI71A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si71.jpg?alt=media&token=e63450b7-be05-4622-9577-5790bd151076",
            x: 71,
            y: 48,
            z: 21,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "monocomando",
            "dosificador"
        ],
        comments: "Nicolas  Hori",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: null,
        note: "1030",
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be55b",
            order: 58,
            code: "LN50",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fln50.png?alt=media&token=47c648ab-acc4-4b94-bf4e-8a5f4ed36a4f",
            x: 50,
            y: 40,
            z: 25,
            instalation: [],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "Agustina Norman",
        user: "631666a420381a9634e219b9",
        __v: 0
    },
    {
        internal: "01",
        note: null,
        quantity: 1,
        jhonson: {
            _id: "6335e180f0233f5b111be57d",
            order: 64,
            code: "D84A",
            type: "A304",
            photo: "http://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzara-d84-a.jpg?alt=media&token=3810a2a0-ef10-47f9-a298-78296ee79843",
            x: 83.5,
            y: 47.18,
            z: 18,
            instalation: [
                "monocomando",
                "dosificador",
                "tres agujeros"
            ],
            __v: 0
        },
        accesories: [],
        done: false,
        instalation: [
            "instalacion de abajo"
        ],
        comments: "stock interno, vender como pil de segunda",
        user: "631666a420381a9634e219b9",
        __v: 0
    }
]

stock.forEach(async stock => {
    let sink = await Sink.create({
        jhonson: stock.jhonson._id,
        accesories: [],
        instalation: stock.instalation,
        done: false,
        user: stock.user
    })
    let newStock = await Stock.create({
        stock: 1,
        sink: sink._id
    })
    Code.create({
        internal: stock.internal,
        note: stock.note,
        stock: [newStock._id],
        user: stock.user,
        comments: stock.comments,
        done: false
    })
})