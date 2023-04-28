require('dotenv').config()
require('../../config/database')
const Acc = require('../Acc')

let accs = [
    {
        name: "BAREE44",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fbare-e44.png?alt=media&token=2cb18342-1593-4668-a3d6-5a3c424ed5f2",
        stock: 50,
        description: "BANDEJA REJILLA E44 DE ACERO INOXIDABLE"
    },
    {
        name: "CAACE37",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fcaac-e37.png?alt=media&token=dcf64699-83c8-46da-a46e-3ef9cbd9c02d",
        stock: 50,
        description: "CANASTO E37 DE ACERO INOXIDABLE"
    },
    {
        name: "ESACE3",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fesac-e3.png?alt=media&token=1540f1c9-9456-4b68-953b-28aa6fd4346a",
        stock: 50,
        description: "ESCURREPLATOS DE ACERO INOXIDABLE E3"
    },
    {
        name: "ESACE4",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fesac-e4.png?alt=media&token=151c1565-9000-48dd-98a9-ff713d2c7872",
        stock: 50,
        description: "ESCURREPLATOS DE ACERO INOXIDABLE E4"
    },
    {
        name: "TAO37",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fta037.png?alt=media&token=7b25dafa-8f9c-4c07-83d0-02202733cd4b",
        stock: 50,
        description: "TABLA DE PICAR O37 (MADERA) "
    },
    {
        name: "TA34",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fta34.png?alt=media&token=2f28ab7a-1ff1-461c-afaa-23e160e9356e",
        stock: 50,
        description: "TABLA DE PICAR MADERA 34 "
    },
    {
        name: "TA37",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fta37.png?alt=media&token=949b72e2-9f2e-4a8e-b576-5ad14e02d82b",
        stock: 50,
        description: "TABLA DE PICAR MADERA 37 "
    },
    {
        name: "TACOO37",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftaco037.png?alt=media&token=df84501e-bf5c-4f8f-9deb-1b3310dcce0e",
        stock: 50,
        description: "TABLA O37 DE CORIAN "
    },
    {
        name: "SOCO",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fsoco.png?alt=media&token=2d1119e9-a3f8-402c-8bca-c71c67ea4b6f",
        stock: 50,
        description: "SOPAPA COMUN "
    },
    {
        name: "SOAM",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fsoam.png?alt=media&token=aa86ca86-1df1-4590-a183-faea18168a12",
        stock: 50,
        description: "SOPAPA AMERICANA "
    },
    {
        name: "SOCESU",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fsocesu.png?alt=media&token=d38996b0-ff76-480a-a3a6-8666e4f7a896",
        stock: 50,
        description: "SOPAPA CESTILLO SUELTA "
    },
    {
        name: "SOCESUCR",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fsocesucr.png?alt=media&token=69283f16-a939-4218-aa62-6bef86640682",
        stock: 50,
        description: "SOPAPA CESTILLO CON ANTIRREBALSE"
    },
    {
        name: "SOCECCR",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fsoceccr.png?alt=media&token=e21199e3-8375-4350-baed-faddb65af930",
        stock: 50,
        description: "SOPAPA CUADRADA C/ANTIRREBALSE"
    },
    {
        name: "SOCEC",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fsocec.png?alt=media&token=533eda3a-2e9d-4230-b661-20c337dc2952",
        stock: 50,
        description: "SOPAPA CUADRADA "
    },
    {
        name: "PIACLU",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fpiaclu.png?alt=media&token=e6296a93-81c0-4d0c-af9d-b0465d599854",
        stock: 50,
        description: "PILETA ACCESORIA LUXOR "
    },
    {
        name: "TALU",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftalu.png?alt=media&token=0482cd4b-59c8-4a76-848a-d0b643959985",
        stock: 50,
        description: "TABLA DE PICAR LUXOR "
    },
    {
        name: "TALC",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftalc.png?alt=media&token=4f43de45-af1b-4c5f-b6dc-453030c458c6",
        stock: 50,
        description: "TABLA DE PICAR LUXOR COMPACT (MADERA)"
    },
    {
        name: "TALM",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftalm.png?alt=media&token=497cc619-9c48-40f3-b5f1-34e2f62e4160",
        stock: 50,
        description: "TABLA DE PICAR LUXOR MINI (MADERA)"
    },
    {
        name: "CASELU",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fcaselu.png?alt=media&token=82c7cc52-f704-4864-a5a9-cbb8310b3f23",
        stock: 50,
        description: "CANASTO SECAPLATOS LUXOR "
    },
    {
        name: "CASELM",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fcaselm.png?alt=media&token=cf867b1c-bbd4-4c4e-9a4f-2e75b436b0f5",
        stock: 50,
        description: "CANASTO SECAPLATOS LUXOR MINI ACERO INOX"
    },
    {
        name: "ESACQ40",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fesac-q40.png?alt=media&token=9e248796-6b90-45ea-90b7-0802506a2e36",
        stock: 50,
        description: "ESCURREPLATOS DE ACERO INOXIDABLE Q40"
    },
    {
        name: "ESACQ37",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fesac-q37.png?alt=media&token=20bd0b5a-e797-48c4-8b35-fd896f436c13",
        stock: 50,
        description: "ESCURREPLATOS DE ACERO INOXIDABLE Q37"
    },
    {
        name: "TAQ40",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftaq40.png?alt=media&token=b3bfc84a-fb2c-4c27-82e6-363949ca4802",
        stock: 50,
        description: "TABLA DE PICAR QUADRA (MADERA)"
    },
    {
        name: "TAQ37",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftaq37.png?alt=media&token=f28e3278-3502-4588-8952-6190bd8384a9",
        stock: 50,
        description: "TABLA DE PICAR Q37 (MADERA) "
    },
    {
        name: "PIACQ71",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fpiac-q71.png?alt=media&token=886cee2a-60aa-4ea8-adf3-4dd4d50b5351",
        stock: 50,
        description: "PILETA ACCESORIA QUADRA MAX Q71 EN ABS BLANCO"
    },
    {
        name: "ESAC Q71",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fesac-q71.png?alt=media&token=27a6bf53-b2d3-4021-8392-770195ea00fe",
        stock: 50,
        description: "ESCURREPLATOS DE ACERO INOXIDABLE Q71"
    },
    {
        name: "TAMOQ71",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftamo-q71.png?alt=media&token=e3b8e027-b048-4b51-a83f-153be9d472ee",
        stock: 50,
        description: "TABLA Q71 DE MONTELLI "
    },
    {
        name: "APIDOCU",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fapidocu.png?alt=media&token=e867379f-c0cc-4c2f-8cd0-e753456f8724",
        stock: 50,
        description: "DOSIFICADOR CUBO "
    },
    {
        name: "TAVTQ55",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftavt-q55.png?alt=media&token=a6ae98dd-2aea-4b14-82ab-74f62e214638",
        stock: 50,
        description: "TABLA DE PICAR QUADRA MINI Q55A VIDRIO TEMPLADO"
    },
    {
        name: "ESACCV",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fesac-cv.png?alt=media&token=9f478bf5-0b17-4198-8125-feaf9ca2dfbf",
        stock: 50,
        description: "ESCURREPLATOS DE ACERO INOXIDABLE CURVE"
    },
    {
        name: "TACVCS",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftacvcs.png?alt=media&token=36ca60f0-981f-433c-ad90-226961c8dad8",
        stock: 50,
        description: "TABLA DE PICAR CURVE CS - COMPACTO ESTRUCTURAL"
    },
    {
        name: "TACVVT",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Ftacvvt.png?alt=media&token=e82c44f7-aa0f-40db-810a-51004ca3fe11",
        stock: 50,
        description: "TABLA DE PICAR CURVE DE VIDRIO TEMPLADO"
    },
    
    {
        name: "CAPIABS",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fcapiabs.png?alt=media&token=4f5da252-4be1-4fca-acee-1b30fcfc6b03",
        stock: 50,
        description: "PILETIN EN ABS "
    },
    {
        name: "APIDO",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fapido.png?alt=media&token=6705e956-f414-494a-b84f-a483a9a7995b",
        stock: 50,
        description: "DOSIFICADOR "
    },
    {
        name: "SITR",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fsitr.png?alt=media&token=7588f96d-242c-43ad-a714-a1b80dc98b36",
        stock: 50,
        description: "ACCESORIO SIFON P/PILETA "
    },
    {
        name: "CUCE",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fcuce.png?alt=media&token=539d75e3-7890-48b6-bf03-633ed6a37e31",
        stock: 50,
        description: "CUBRE CESTILLO "
    },
    {
        name: "KG",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fkg.png?alt=media&token=1dbc2425-458a-4509-8175-25f8631eb603",
        stock: 50,
        description: "KIT GRAMPAS PARA PILETAS DE ABAJO"
    },
    {
        name: "AROE37",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Faro-e37.png?alt=media&token=e6316d8d-cd21-43aa-b37b-8fd3b047ef68",
        stock: 50,
        description: "ARO P/E37 SIMPLE GRANITO C/GRAMPAS Y TORNILLOS"
    },
    {
        name: "AROZ52",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Faro-z52.png?alt=media&token=3d24503d-264c-4d11-b239-ecd219150769",
        stock: 50,
        description: "ARO P/Z52 SIMPLE GRANITO C/GRAMPAS Y TORNILLOS"
    },
    {
        name: "GRTO",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fgr-to.png?alt=media&token=6fb3607f-f65e-4327-b547-b3c4f3db889f",
        stock: 50,
        description: "GRAMPA C/TORNILLO PARA ARO DE ALUMINIO"
    },
    {
        name: "VREGRLUMI",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fvregrlumi.png?alt=media&token=f71252e2-901e-4543-a2fb-24e1bffefc84",
        stock: 50,
        description: "REFUERZO PARA GRIFERIA - PILETAS LUXOR"
    },
    {
        name: "VREGRLUSI71",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fvregrlusi71.png?alt=media&token=e0dcb925-c39d-4fac-b1af-7f814fa91779",
        stock: 50,
        description: "REFUERZO PARA GRIFERIA - PILETAS LUXOR"
    },
    {
        name: "VREGRLUSI85",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fvregrlusi85.png?alt=media&token=4d95b3e7-72c1-4243-87d8-11d512663933",
        stock: 50,
        description: "REFUERZO PARA GRIFERIA - PILETAS LUXOR"
    },
    {
        name: "VREGRQ71MAX",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fvregrq71max.png?alt=media&token=e761b84e-4eec-42c0-9f81-088e75988dc2",
        stock: 50,
        description: "REFUERZO PARA GRIFERIA - PILETAS Q71"
    },
    {
        name: "VREGRQ84",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fvregrq84.png?alt=media&token=8fb21cdb-a2a9-423c-a969-4039303d09fa",
        stock: 50,
        description: "REFUERZO PARA GRIFERIA - PILETAS Q84-CORIAN/FENOLICO"
    },
    {
        name: "VREGRQ85",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fvregrq85.png?alt=media&token=6f3a7c85-a7c0-4388-a326-3e63c476d214",
        stock: 50,
        description: "REFUERZO PARA GRIFERIA - PILETAS Q85-CORIAN/FENOLICO"
    },
    {
        name: "VREGRX28",
        photo: "https://firebasestorage.googleapis.com/v0/b/portaro-edc21.appspot.com/o/jhonson%2Faccesorios%2Fvregrx28.png?alt=media&token=955ed30e-4ffd-45dc-8e2e-26e0945e2709",
        stock: 50,
        description: "REFUERZO PARA GRIFERIA - PILETAS X28-CORIAN/FENOLICO"
    }
]

const creates = async()=> {
    await Acc.insertMany(accs)
    console.log('done!')
}

creates()