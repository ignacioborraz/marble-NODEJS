require('dotenv').config()
require('../../config/database')
const clients = require('./au02.clients')
const Client = require('../Client')
const Note = require('../Note')

let notes = [
    {
        number_code: 1030,
        stock: 1,
        ksink: 'primera',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1481,
        stock: 1,
        ksink: 'segunda',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1711,
        stock: 2,
        ksink: 'hola',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1711,
        stock: 1,
        ksink: '63e705965316e54aaaab35ea',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1816,
        stock: 1,
        ksink: 'segunda',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1886,
        stock: 1,
        ksink: 'hola',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1910,
        stock: 1,
        ksink: '63e705965316e54aaaab35cb',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 1938,
        stock: 1,
        ksink: 'tercer',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2025,
        stock: 1,
        ksink: 'hiiii',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2063,
        stock: 1,
        ksink: 'segunda',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2077,
        stock: 1,
        ksink: 'hiiii',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2139,
        stock: 1,
        ksink: '63e705965316e54aaaab35dc',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2202,
        stock: 1,
        ksink: 'tercer',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2212,
        stock: 1,
        ksink: 'adios',
        instalation: ['monocomando','dosificador'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2212,
        stock: 1,
        accesory: 'chau',
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2228,
        stock: 1,
        ksink: 'hola',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },{
        number_code: 2235,
        stock: 1,
        ksink: 'hola',
        instalation: ['inferior'],
        comments: '',
        internal: false,
        done: false,
        user: '63ddcae20127c43c506cdf5c'
    },
    
]

const creates = async()=> {
    for (let i=0; i<clients.length; i++) {
        let client = await Client.create(clients[i])
        notes[i].client = client.id
        let note = await Note.create(notes[i])
    }
}

creates()