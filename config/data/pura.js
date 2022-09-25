require('dotenv').config()
const db = require('../../config/database')
const Color = require('../../models/Color')

let colors = [
    {
        name: "Basaltina (M)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fbasaltina.png?alt=media&token=e303cc86-5913-4849-8258-3cfa9d970cd6",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Bianco Luxe (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fbianco-luxe.jpg?alt=media&token=72136f0d-131b-4480-b781-385618b55847",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Bianco Silver (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fbianco-silver.jpg?alt=media&token=04cd5ef0-0cc4-4c95-a659-2ec5b737e314",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Blanco Cana (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fblanco-cana.jpg?alt=media&token=c75cc85d-afa8-401b-865c-744a280d9d4e",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Blanco Glitter (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fblanco-glitter.jpg?alt=media&token=f0f1aab9-0c6d-4c82-a17f-26b857e145c7",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Blanco Icon (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fblanco-icon.jpg?alt=media&token=f52885a8-fcde-4563-aabe-a7242b401218",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Blanco Nube (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fblanco-nube.jpg?alt=media&token=fbd8657c-7a6b-46b8-ae0c-5f7d978a93d6",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Blanco Paloma (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fblanco-paloma.jpg?alt=media&token=10856f29-29a6-4c53-9d38-6d1a402310a7",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Calacatta Gold (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fcalacatta-gold.png?alt=media&token=8ff79357-9680-4f82-8ef2-f438445e3a49",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Cemento (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fcemento.jpg?alt=media&token=9a662741-bce6-44f2-8e65-87ca7dfa84c6",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Crema Pisa (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fcrema-pisa.jpg?alt=media&token=ea623f7e-97bc-4d52-8945-ae36e2b18f3a",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Greyge (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fgreyge.jpg?alt=media&token=29ca8a7e-6a8c-49dc-98d5-c3d93a89fa2e",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Gris Fosil (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fgris-fosil.jpg?alt=media&token=53f874b4-11bd-44ab-9085-984c967f5723",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Gris Topo (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fgris-topo.jpg?alt=media&token=f89cba33-606a-4532-94e6-5ee35ef799f6",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Gris Zen",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fgris-zen.jpg?alt=media&token=2af3831e-529c-45b6-b926-08d325e81eb8",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Gris Zero (P) ",
        photo: "http://www.detryamorena.com/wp-content/uploads/2019/08/PRS_portfolio_04-300x300.png",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Negro Betún (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fnegrto-betun.jpg?alt=media&token=95a927b9-572d-4a3f-9cf6-e5c5dfed3e1f",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Negro Glitter (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fnegro-glitter.jpg?alt=media&token=d628499f-fca9-4583-959b-aeedf39bb941",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Noir (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fnoir.jpg?alt=media&token=a17ec2e7-e6b6-4298-85d3-2e7890b5ac8e",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Pura Concrete (L)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fconcrete.jpg?alt=media&token=82c50758-3512-42c5-a965-fe1cc56f2dd8",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Pura Concrete Dark (L)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fconcrete-dark.jpg?alt=media&token=5dc2e512-4652-4cea-bf6c-fe5968354797",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Pura Statuarietto (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fstatuarietto.jpg?alt=media&token=a9ef5081-1f32-4715-9f79-3c60634b9558",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Rojo Pura (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Frojo-pura.jpg?alt=media&token=23459b86-b356-4847-a345-99c2062b609f",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Terrazo White (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fterrazo-white.jpg?alt=media&token=eedd2f07-2e98-47bd-93b4-a0a86beb2d3b",
        company: "62e5fdf7e3ef843cb2fd1a42"
    },
    {
        name: "Venatino (P)",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/placas%2Fpura%2Fvenatino.jpg?alt=media&token=d01df6e6-ed19-4a71-8b19-9cd90553c3bd",
        company: "62e5fdf7e3ef843cb2fd1a42"
    }
]

colors.forEach(color => {
    Color.create({
        name: color.name,
        photo: color.photo,
        company: color.company
    })
})