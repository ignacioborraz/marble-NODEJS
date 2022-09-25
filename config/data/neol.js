require('dotenv').config()
const db = require('../database')
const Color = require('../../models/Color')

let colors = [
    {
        name: "Abu Dhabi (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fabu-dhabi.jpg?alt=media&token=3f1ae355-74b9-4885-801d-7654c776c61a",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Abu Dhabi (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fabu-dhabi.jpg?alt=media&token=3f1ae355-74b9-4885-801d-7654c776c61a",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Amazónico (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Famazonico.jpg?alt=media&token=bef7b1df-249b-429b-9d66-99db28578ff2",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Amazónico (SL)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Famazonico.jpg?alt=media&token=bef7b1df-249b-429b-9d66-99db28578ff2",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Artic White (N)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Farctic-white.jpg?alt=media&token=641571bd-0731-4e94-9b46-4322458c5680",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Artic White (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Farctic-white.jpg?alt=media&token=641571bd-0731-4e94-9b46-4322458c5680",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Avorio (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Favorio.jpg?alt=media&token=d805fa2e-3f03-46cc-95fe-6e95f772d3f4",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Barro (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneol.png?alt=media&token=27cd3742-e2bb-40b4-8011-052e67d84bcd",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Basalt Black (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fbasalt-black.jpg?alt=media&token=e73cc57a-a083-409b-8f10-806230e82e03",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Basalt Grey (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fbasalt-grey.jpg?alt=media&token=5e4c26c5-98a5-47be-aa3d-4812c2e4606d",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Beton (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fbeton.jpg?alt=media&token=0c576668-ceca-4335-bdce-e6937e79d3d9",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Calacatta C01 (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcalacatta.jpg?alt=media&token=6d37f67b-6e02-4145-98d3-f13af368139d",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Calacatta C01 (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcalacatta.jpg?alt=media&token=6d37f67b-6e02-4145-98d3-f13af368139d",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Calacatta Gold (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcalacatta-gold.jpg?alt=media&token=51b335fa-1912-49b2-afa4-c621640ff040",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Calacatta Gold (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcalacatta-gold.jpg?alt=media&token=51b335fa-1912-49b2-afa4-c621640ff040",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Calacatta Luxe (U)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcalacatta-luxe.jpg?alt=media&token=01680396-2d00-4835-836f-fd2a41982b26",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Calatorao (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcalatorao.jpg?alt=media&token=5aada138-bfab-460d-9dcc-e6aab0050a8d",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Cement (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcement.jpg?alt=media&token=e2b27afd-e6b8-45b8-8c0a-0e935fe05b4a",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Ceppo Di Gres (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fcepo-di-gres.jpg?alt=media&token=c0bbac40-8a0a-4789-b245-5d024a3a8aa8",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Estatuario E01 (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Festattuario-e01.jpg?alt=media&token=2a371ea2-d18b-4122-bd25-a50e1bbb5b8a",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Estatuario E01 (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Festattuario-e01.jpg?alt=media&token=2a371ea2-d18b-4122-bd25-a50e1bbb5b8a",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Estatuario E05 (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Festattuario-e05.jpg?alt=media&token=84dacb29-bb62-4da4-ad30-090bdd39423f",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Estatuario E05 (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Festattuario-e05.jpg?alt=media&token=84dacb29-bb62-4da4-ad30-090bdd39423f",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Himalaya Crystal (U)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fhimalaya-crystal.jpg?alt=media&token=8ba6418a-1103-43b5-8ecf-8df2208d6380",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Iron Copper (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Firon-cooper.jpg?alt=media&token=f09a0006-4e6c-4330-9be9-eb2ae3f8c1de",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Iron Corten (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Firon-corten.jpg?alt=media&token=ad101f28-9b32-4777-b9dc-0c59efa7dffc",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Iron Frost (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Firon-frost.jpg?alt=media&token=ce24b96f-f64b-49f2-a29b-74875fdc06c9",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Iron Grey (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Firon-grey.jpg?alt=media&token=731de129-d8f7-4278-9989-5be85d12a47e",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Just White (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fjust-white.jpg?alt=media&token=62e16cab-39c7-49d0-aa3e-15ba0aeb3044",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Krater (R)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fkrater.jpg?alt=media&token=d6e9782a-7d53-48e5-8e8d-5433fb72704c",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Layla (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Flayla.jpg?alt=media&token=4290757f-2e67-470c-9675-beb64b280ec8",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Layla (SL)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Flayla.jpg?alt=media&token=4290757f-2e67-470c-9675-beb64b280ec8",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Mar del Plata (R) -",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fmar-del-plata.jpg?alt=media&token=2f4b0c96-6216-449b-995a-1fa2c0f100f8",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Mont Blanc (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fmont-blanc.jpg?alt=media&token=6f8947d8-4ac1-436d-87ca-56d7dcc4152a",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Nero (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fnero.jpg?alt=media&token=5c45d7e4-7932-484e-8e49-3d992065d490",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Nero Marquina NM01 (DP)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fnero-marquina.jpg?alt=media&token=a17923d2-302e-4cc3-a511-497bb0f66564",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Nero Marquina NM01 (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fnero-marquina.jpg?alt=media&token=a17923d2-302e-4cc3-a511-497bb0f66564",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Nero Zimbabwe (R)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fnero-zimbabwe.jpg?alt=media&token=54ab43f4-fd57-4730-8daa-79627e10c7e1",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "New York New York (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fny-ny.jpg?alt=media&token=70174ed5-8ae4-49c6-8ada-72f27c02805e",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Perla (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fperla.jpg?alt=media&token=b487633c-4d8a-43ea-99b1-19b960720a85",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Phedra (S)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fphedra.jpg?alt=media&token=a602cf7e-7c44-40f9-bcdd-0b4208afb246",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Pierre Bleue (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fpierre-bleue.jpg?alt=media&token=a99a1b89-6e3c-49f5-9109-8009c31e64b1",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Pietra Di Luna (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fpietra-di-luna.jpg?alt=media&token=3ba5036e-7a60-4e00-a2c9-438ee1dcdbea",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Pietra Di Osso (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fpietra-di-osso.jpg?alt=media&token=aa2cfcd3-fe8d-47fb-b333-68452928c1b8",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Pietra Di Piombo (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fpietra-di-piombo.jpg?alt=media&token=28883d82-7b19-4f21-a7d1-af03b3f25459",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Retrostone (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fretrostone.jpg?alt=media&token=01050955-df27-4bc8-a552-48e8d07c34d3",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Sofia Cuprum (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fsofia-cuprum.jpg?alt=media&token=46029ffa-8012-4794-ba3d-9ad46076d193",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Strata Argentum (NH)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fstrata-argentum.jpg?alt=media&token=dbaa05fb-074b-469e-a1db-9228f605bbfc",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Summer Dala (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fsummer-dala.jpg?alt=media&token=91df00bd-83f1-45b2-984c-3e7f67f695b2",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Winter Dala (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fwinter-dala.jpg?alt=media&token=5fb27231-8e08-4df3-93a1-cb87a6476b46",
        company: "62e5fee1e3ef843cb2fd1a48"
    },
    {
        name: "Zaha Stone (K)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fneo%2Fzaha-stone.jpg?alt=media&token=d9ddc9a7-8a77-4877-bb58-1eb8e72f3d2b",
        company: "62e5fee1e3ef843cb2fd1a48"
    }
]

colors.forEach(color => {
    Color.create({
        name: color.name,
        photo: color.photo,
        company: color.company
    })
})