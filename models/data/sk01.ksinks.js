require('dotenv').config()
require('../../config/database')
const Ksink = require('../Ksink')

let sinks = [
    {
        order: 91,
        name: "AXA D78A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Faxa-d78a.jpg?alt=media&token=eec4d08a-e40c-4e07-a16d-bbb388ac8e79",
        x: 78,
        y: 78,
        z: 18,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 65,
        name: "C28",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
        x: 59.8,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 66,
        name: "CC28",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
        x: 59.8,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 67,
        name: "CC28B",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
        x: 59.8,
        y: 34,
        z: 13,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 68,
        name: "CC28/18",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
        x: 59.8,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 69,
        name: "C28CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
        x: 59.8,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 70,
        name: "C28/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
        x: 59.8,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 71,
        name: "C28/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc28.jpg?alt=media&token=1c200fc0-5340-4403-a253-dbadb291b55a",
        x: 59.8,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 72,
        name: "C37",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc37.jpg?alt=media&token=fb6c8c04-4611-4c8a-82a9-801a5da8b0d6",
        x: 70.8,
        y: 37,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 73,
        name: "CC37",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc37.jpg?alt=media&token=fb6c8c04-4611-4c8a-82a9-801a5da8b0d6",
        x: 70.8,
        y: 37,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 74,
        name: "C37CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc37.jpg?alt=media&token=fb6c8c04-4611-4c8a-82a9-801a5da8b0d6",
        x: 70.8,
        y: 37,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 75,
        name: "C37/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc37.jpg?alt=media&token=fb6c8c04-4611-4c8a-82a9-801a5da8b0d6",
        x: 70.8,
        y: 37,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 76,
        name: "C37/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fc37.jpg?alt=media&token=fb6c8c04-4611-4c8a-82a9-801a5da8b0d6",
        x: 70.8,
        y: 37,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 7,
        name: "CURVE SI77A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fcurve.jpg?alt=media&token=9700180e-9fca-491c-abcf-c07741d69ac8",
        x: 77,
        y: 43,
        z: 20,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 8,
        name: "E28",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe28.jpg?alt=media&token=a6c34346-5f36-4d82-9631-ef464a190820",
        x: 34,
        y: 28.5,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 9,
        name: "EE28",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe28.jpg?alt=media&token=a6c34346-5f36-4d82-9631-ef464a190820",
        x: 34,
        y: 28.5,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 10,
        name: "E28CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe28.jpg?alt=media&token=a6c34346-5f36-4d82-9631-ef464a190820",
        x: 34,
        y: 28.5,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 11,
        name: "E37",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe37.jpg?alt=media&token=48345eed-259a-4fac-8e41-9394789482ac",
        x: 37,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 12,
        name: "EE37",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe37.jpg?alt=media&token=48345eed-259a-4fac-8e41-9394789482ac",
        x: 37,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 13,
        name: "EE37/18",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe37.jpg?alt=media&token=48345eed-259a-4fac-8e41-9394789482ac",
        x: 37,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 14,
        name: "E37CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe37.jpg?alt=media&token=48345eed-259a-4fac-8e41-9394789482ac",
        x: 37,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 15,
        name: "E37/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe37.jpg?alt=media&token=48345eed-259a-4fac-8e41-9394789482ac",
        x: 37,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 16,
        name: "E37/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe37.jpg?alt=media&token=48345eed-259a-4fac-8e41-9394789482ac",
        x: 37,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 17,
        name: "E44",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe44.jpg?alt=media&token=a8f59378-a5d2-42ee-8732-b65c48f846d4",
        x: 44,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 18,
        name: "E44CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe44.jpg?alt=media&token=a8f59378-a5d2-42ee-8732-b65c48f846d4",
        x: 44,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 19,
        name: "E44/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe44.jpg?alt=media&token=a8f59378-a5d2-42ee-8732-b65c48f846d4",
        x: 44,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 20,
        name: "E44/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe44.jpg?alt=media&token=a8f59378-a5d2-42ee-8732-b65c48f846d4",
        x: 44,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 21,
        name: "E50/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe50.jpg?alt=media&token=42481770-6885-4872-baf5-b0421e413269",
        x: 50,
        y: 40,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 22,
        name: "E50/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe50.jpg?alt=media&token=42481770-6885-4872-baf5-b0421e413269",
        x: 50,
        y: 40,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 23,
        name: "E54",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe50.jpg?alt=media&token=42481770-6885-4872-baf5-b0421e413269",
        x: 54,
        y: 36,
        z: 24,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 24,
        name: "E60",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe60.jpg?alt=media&token=88ced821-e000-4663-aa57-546a01d6157e",
        x: 60,
        y: 37,
        z: 20,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 25,
        name: "E60CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe60.jpg?alt=media&token=88ced821-e000-4663-aa57-546a01d6157e",
        x: 60,
        y: 37,
        z: 20,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 26,
        name: "E60T",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe60.jpg?alt=media&token=88ced821-e000-4663-aa57-546a01d6157e",
        x: 60,
        y: 37,
        z: 20,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 27,
        name: "E60TCR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe60.jpg?alt=media&token=88ced821-e000-4663-aa57-546a01d6157e",
        x: 60,
        y: 37,
        z: 20,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 28,
        name: "E60A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fe60.jpg?alt=media&token=88ced821-e000-4663-aa57-546a01d6157e",
        x: 68.3,
        y: 44.5,
        z: 20,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 29,
        name: "G50",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fg50.jpg?alt=media&token=b57d73d9-a0c8-4e0c-ae06-f88c14caeeec",
        x: 50,
        y: 40,
        z: 26,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 92,
        name: "HYDRA J107A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fhydra-j-107-a.jpg?alt=media&token=6c07aba2-ee1b-487b-90bc-adfb6c850c72",
        x: 107,
        y: 43.5,
        z: 18,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 58,
        name: "LN50",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fln50.png?alt=media&token=47c648ab-acc4-4b94-bf4e-8a5f4ed36a4f",
        x: 50,
        y: 40,
        z: 25,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 5,
        name: "LUXOR MINI SI55A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-mini-si55.jpg?alt=media&token=761ed8e5-f4c3-4c05-9216-1a966819b4ca",
        x: 55,
        y: 41.5,
        z: 20,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 3,
        name: "LUXOR COMPACT SI71A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si71.jpg?alt=media&token=e63450b7-be05-4622-9577-5790bd151076",
        x: 71,
        y: 48,
        z: 21,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 4,
        name: "LUXOR SI71STA",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si71.jpg?alt=media&token=e63450b7-be05-4622-9577-5790bd151076",
        x: 71,
        y: 48,
        z: 21,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 1,
        name: "LUXOR SI85A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si85.jpg?alt=media&token=39ee3aa0-1292-4a13-94db-c543d1a1248e",
        x: 85.5,
        y: 48.2,
        z: 21,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 2,
        name: "LUXOR SI85STA",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fluxor-si85.jpg?alt=media&token=39ee3aa0-1292-4a13-94db-c543d1a1248e",
        x: 85.5,
        y: 48.2,
        z: 21,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 38,
        name: "O37A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fo37-a.jpg?alt=media&token=ebcec317-6a21-4e13-b339-03cf938399a6",
        x: 0,
        y: 37,
        z: 20,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 39,
        name: "ON30A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fon-30a.jpg?alt=media&token=83298e0d-bbd1-429e-b3de-497c16744e2c",
        x: 0,
        y: 30,
        z: 14,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 6,
        name: "QUADRA MAX Q71",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-max-q71.jpg?alt=media&token=06abf755-3d90-405b-8394-f4d103ea1d94",
        x: 71,
        y: 48,
        z: 20,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 40,
        name: "QUADRA Q37",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q37.jpg?alt=media&token=4f52bc52-033e-4140-9362-c14cef988acb",
        x: 37,
        y: 34,
        z: 17.5,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 41,
        name: "QUADRA Q37CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q37.jpg?alt=media&token=4f52bc52-033e-4140-9362-c14cef988acb",
        x: 37,
        y: 34,
        z: 17.5,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 42,
        name: "QUADRA Q40",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q40.jpg?alt=media&token=489a115b-ab1c-44ec-9ff2-49dd35680ea8",
        x: 40,
        y: 34,
        z: 17.5,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 43,
        name: "QUADRA Q40CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q40.jpg?alt=media&token=489a115b-ab1c-44ec-9ff2-49dd35680ea8",
        x: 40,
        y: 34,
        z: 17.5,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 61,
        name: "QUADRA Q76",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q76.jpg?alt=media&token=e1fca6ce-af6f-48a8-99d5-d24669d015ca",
        x: 70.8,
        y: 37,
        z: 17.5,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 62,
        name: "QUADRA Q76CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q76.jpg?alt=media&token=e1fca6ce-af6f-48a8-99d5-d24669d015ca",
        x: 70.8,
        y: 37,
        z: 17.5,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 63,
        name: "QUADRA Q76A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q76.jpg?alt=media&token=e1fca6ce-af6f-48a8-99d5-d24669d015ca",
        x: 77.5,
        y: 43.5,
        z: 17.5,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 59,
        name: "QUADRA Q84A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q84.jpg?alt=media&token=ccb12341-d5ee-42c9-b633-6a5cfd2a8f84",
        x: 83.5,
        y: 55.9,
        z: 17.5,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 60,
        name: "QUADRA Q85A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fquadra-q85.jpg?alt=media&token=a6d52693-c35a-47e4-970b-89c93dd9bdeb",
        x: 85.5,
        y: 48.2,
        z: 17.5,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 77,
        name: "R37",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr37.jpg?alt=media&token=78bfcbfd-0a64-41cd-9c7f-eb06a8c6bedf",
        x: 63.3,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 78,
        name: "R37",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr37.jpg?alt=media&token=78bfcbfd-0a64-41cd-9c7f-eb06a8c6bedf",
        x: 63.3,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 79,
        name: "R37CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr37.jpg?alt=media&token=78bfcbfd-0a64-41cd-9c7f-eb06a8c6bedf",
        x: 63.3,
        y: 34,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 80,
        name: "R37/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr37.jpg?alt=media&token=78bfcbfd-0a64-41cd-9c7f-eb06a8c6bedf",
        x: 63.3,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 81,
        name: "R37/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr37.jpg?alt=media&token=78bfcbfd-0a64-41cd-9c7f-eb06a8c6bedf",
        x: 63.3,
        y: 34,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 82,
        name: "R63",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
        x: 63.8,
        y: 37,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 83,
        name: "R63",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
        x: 63.8,
        y: 37,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 84,
        name: "R63CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
        x: 63.8,
        y: 37,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 85,
        name: "R63/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
        x: 63.8,
        y: 37,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 86,
        name: "R63/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
        x: 63.8,
        y: 37,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 87,
        name: "R63/18F",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
        x: 70.5,
        y: 43.5,
        z: 18.5,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 88,
        name: "R63/18FCR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fr63.jpg?alt=media&token=bc4a6542-4b84-47b9-93ff-afdc4152e090",
        x: 70.5,
        y: 43.5,
        z: 18.5,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 46,
        name: "T34",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Ft34.jpg?alt=media&token=5beaa57b-63e0-43c5-bc2e-4c50628d9189",
        x: 34,
        y: 23.5,
        z: 14,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 47,
        name: "TT34",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Ft34.jpg?alt=media&token=5beaa57b-63e0-43c5-bc2e-4c50628d9189",
        x: 34,
        y: 23.5,
        z: 14,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 48,
        name: "T34/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Ft34.jpg?alt=media&token=5beaa57b-63e0-43c5-bc2e-4c50628d9189",
        x: 34,
        y: 23.5,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 90,
        name: "X28",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fx28.jpg?alt=media&token=2344a27f-4601-48ad-a23d-10cd54f2afa3",
        x: 61.5,
        y: 61.5,
        z: 15,
        stock: 20,
        instalation:  []
    },{
        order: 64,
        name: "D84A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzara-d84-a.jpg?alt=media&token=3810a2a0-ef10-47f9-a298-78296ee79843",
        x: 83.5,
        y: 47.18,
        z: 18,
        stock: 20,
        instalation: ['monocomando','dosificador','tres agujeros']
    },{
        order: 49,
        name: "Z52",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 52,
        y: 32,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 50,
        name: "ZZ52",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 52,
        y: 32,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 51,
        name: "ZZ52B",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 52,
        y: 32,
        z: 13,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 52,
        name: "ZZ52/18",
        type: "A430",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 52,
        y: 32,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 53,
        name: "Z52CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 52,
        y: 32,
        z: 15,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 54,
        name: "Z52/18",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 52,
        y: 32,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 55,
        name: "Z52/18CR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 52,
        y: 32,
        z: 18,
        stock: 20,
        instalation: ['inferior']
    },{
        order: 56,
        name: "ZN52/18A",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 57.8,
        y: 37.8,
        z: 18,
        stock: 20,
        instalation:  ['monocomando','dosificador','tres agujeros']
    },{
        order: 57,
        name: "ZN52/18ACR",
        type: "A304",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Fpiletas%2Fzn52.jpg?alt=media&token=b5d039aa-b5a2-42d5-b9d0-94772f378166",
        x: 57.8,
        y: 37.8,
        z: 18,
        stock: 20,
        instalation:  ['monocomando','dosificador','tres agujeros']
    }    
]

const creates = async()=> {
    await Ksink.insertMany(sinks)
    console.log('done!')
}

creates()