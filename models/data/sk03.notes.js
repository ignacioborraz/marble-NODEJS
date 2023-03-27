require('dotenv').config()
require('../../config/database')
const clients = require('./au02.clients')
const Client = require('../Client')
const Ksink = require('../Ksink')
const Note = require('../Note')

let notes = [
    {
        number_code: 1030,
        stock: 1,
        ksink: 'LN50',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1481,
        stock: 1,
        ksink: 'LUXOR COMPACT SI71A',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1711,
        stock: 2,
        ksink: 'CURVE SI77A',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1711,
        stock: 1,
        ksink: 'Z52',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1816,
        stock: 1,
        ksink: 'LUXOR COMPACT SI71A',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1886,
        stock: 1,
        ksink: 'CURVE SI77A',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1910,
        stock: 1,
        ksink: 'LUXOR SI85A',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1938,
        stock: 1,
        ksink: 'C28/18',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2025,
        stock: 1,
        ksink: 'R63/18',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2063,
        stock: 1,
        ksink: 'LUXOR COMPACT SI71A',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2077,
        stock: 1,
        ksink: 'R63/18',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2139,
        stock: 1,
        ksink: 'R37/18',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2202,
        stock: 1,
        ksink: 'C28/18',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2212,
        stock: 1,
        ksink: 'QUADRA MAX Q71',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    }    
]

const creates = async()=> {
    for (let i=0; i<clients.length; i++) {
        let client = await Client.create(clients[i])
        let ksink = await Ksink.findOne({name: notes[i].ksink})
        notes[i].client = client._id
        notes[i].ksink = ksink._id
        await Note.create(notes[i])
    }
    console.log('done!')
}

creates()