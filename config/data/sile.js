require('dotenv').config()
const db = require('../database')
const Color = require('../../models/Color')

let colors = [
    {
        name: "Blanco Norte",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fblanco-norte.jpg?alt=media&token=5349f34b-978a-4f7c-9514-957de5c3ad94",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Gris Expo",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fgris-expo.jpg?alt=media&token=e3762b5c-89e7-4b77-aefa-0822d6ea00cd",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Negro Tebas",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fnegro-tebas.jpg?alt=media&token=c2c0d207-15a1-43ee-8366-1733ce2c9c82",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Rougui Lena",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Frougui-lena.jpg?alt=media&token=905a884d-609a-46a2-ae86-840af168e3e1",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Noka",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fnoka.jpg?alt=media&token=df030cde-8090-49fd-99dc-012cc57c0c16",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "White Storm",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fwhite-storm.jpg?alt=media&token=cb85e1c5-731a-4826-b90b-e355dbe98a5f",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Aluminio Nube",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Faluminio-nube.jpg?alt=media&token=afe431a5-b424-4735-a552-61e93368b3c0",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Blanco Stellar",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fblanco-stellar.jpg?alt=media&token=e8a3e2c6-52da-468d-808d-0c8aeccd2987",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Lyra",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Flyra.jpg?alt=media&token=09cb1b14-3a1f-4f5e-a0f7-cc91a7337600",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Miami White",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fmiami-white.jpg?alt=media&token=cbbb216f-7b79-4533-a5d9-f2b7112a2402",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Negro Stellar",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fnegro-stellar.jpg?alt=media&token=96e96c33-34a3-4774-8677-dcd7e9ef3936",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Niebla",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fniebla.jpg?alt=media&token=7b9d38b2-ea01-46fa-8844-2e2dcaf82f4c",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Unsui",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Funsui.jpg?alt=media&token=df72a957-ec4f-42b0-82cf-a9ea2d048e40",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Yukon",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fyukon.jpg?alt=media&token=3e21b545-b6cb-4707-8a71-f8082ed47939",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Kensho",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fkensho.jpg?alt=media&token=b8f27116-a222-4a14-acec-3b87712cfa27",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Blanco Zeus Extreme",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fblanco-zeus-extreme.jpg?alt=media&token=18685a83-7e05-4eaa-9793-5fa7d2cf2e27",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Charcoal Soap",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fcharcoal-soapstone.jpg?alt=media&token=93a4213b-84ea-42a8-a020-fbbc11f94fef",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Pearl Jasmine",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fpearl-jasmine.jpg?alt=media&token=7dd13bb7-9890-4d75-a84e-e035d56ec50e",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Desert Silver",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile.png?alt=media&token=6e6fa439-743d-4101-9b7f-3ccc27999318",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Calacatta Classic",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Feternal-calacatta-classic.jpg?alt=media&token=00db45da-9509-41f9-be21-3fd7eee5a92d",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Calacatta Gold",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fcalacatta-gold.jpg?alt=media&token=e620a67c-3344-408d-ac9f-6c8827e05087",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Marquina",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fmarquina.jpg?alt=media&token=254e8fc7-4f8f-42d8-b9f3-fe5573416975",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Noir",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Feternal-noir.jpg?alt=media&token=9593adc7-36ca-4e23-8866-6e9470d22cab",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Ether Glow",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fethereal-glow.jpg?alt=media&token=5479b909-db62-403e-910d-97e641f7ba23",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Ether Dusk",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fethereal-dusk.jpg?alt=media&token=245ae83e-57d1-4c85-bdab-51c447484d04",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Iconic Black",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Ficonic-black.jpg?alt=media&token=0b1ff1d7-1970-4899-bbde-a36f425c16c3",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Rosso Monza",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Frosso%20monza.jpg?alt=media&token=ab3e72f8-8427-46e3-8d8e-c35160f8dba2",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Pulsar",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fpulsar.jpg?alt=media&token=c1293182-6f7f-4a8a-9ee0-de939867148c",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Tigris Sand",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Ftigris-sand.jpg?alt=media&token=9621d88f-b13a-49d9-a329-2a584c8c3e19",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Blanco Norte Suede",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fblanco-norte.jpg?alt=media&token=5349f34b-978a-4f7c-9514-957de5c3ad94",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Gris Expo Suede",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fgris-expo.jpg?alt=media&token=e3762b5c-89e7-4b77-aefa-0822d6ea00cd",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Negro Tebas Suede",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile.png?alt=media&token=6e6fa439-743d-4101-9b7f-3ccc27999318",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "White Storm Suede",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fwhite-storm.jpg?alt=media&token=cb85e1c5-731a-4826-b90b-e355dbe98a5f",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Blanco Zeus Suede",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fblanco-zeus-extreme.jpg?alt=media&token=18685a83-7e05-4eaa-9793-5fa7d2cf2e27",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Marquina Suede",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fmarquina.jpg?alt=media&token=254e8fc7-4f8f-42d8-b9f3-fe5573416975",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Arcilla Red",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Farcilla-red.jpg?alt=media&token=989ad4ef-173f-48fa-9960-6eb3316c1c8a",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Cala Blue",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fcala-blue.jpg?alt=media&token=0dfd9836-f4ea-46fc-b51a-0b00d93f0707",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
    {
        name: "Posidonia Green",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fsile%2Fposidonia-green.jpg?alt=media&token=2df3f31d-7c97-4676-890f-040d21a98e55",
        company: "62e5fe3be3ef843cb2fd1a44"
    },
]

colors.forEach(color => {
    Color.create({
        name: color.name,
        photo: color.photo,
        company: color.company
    })
})