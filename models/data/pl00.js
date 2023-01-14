let companies = [
    {
        name: 'Pura Stone',
        plates: [
            {
                namePlate: 'Blanco Paloma',
                size: [
                    {type: 'Jumbo', size: {height: 1.60, width: 3.20}},
                    {type: 'Standard', size: {with: 1.40, height: 3.00}},
                    
                ],
                lot: 'PS00519-P' //este dato es de cada placa o escuadra o retazo (configurar bien)
            },
            {
                namePlate: 'Statuarietto',
                size: [
                    {type: 'Jumbo', size: {height: 1.60, width: 3.20}},
                    {type: 'Standard', size: {height: 1.40, width: 3.00}}
                ],
                lot: 'PS00520-P'
            }
        ]
    },
    {
        name: 'Silestone',
        plates: [
            {
                namePlate: 'White Storm',
                size: [
                    {type: 'Jumbo', size: {height: 1.60, width: 3.20}},
                    {type: 'Standard', size: {height: 1.40, width: 3.00}}
                ],
                lot: 'SI0850-S'
            },
            {
                namePlate: 'Calacatta Classic',
                size: [
                    {type: 'Jumbo', size: {height: 1.60, width: 3.20}},
                    {type: 'Standard', size: {height: 1.40, width: 3.00}}
                ],
                lot: 'SI0851-S'
            }
        ]
    },
    {
        name: 'Dekton',
        plates: [
            {
                namePlate: 'Calacatta Natura',
                size: [
                    {type: 'Placa Entera', size: {height: 1.44, width: 3.20}},
                    {type: 'Media Placa', size: {height: 0.72, width: 3.20}}
                ],
                lot: 'DO0851-D'
            },
            {
                namePlate: 'Zenith',
                size: [
                    {type: 'Placa Entera', size: {height: 1.44, width: 3.20}},
                    {type: 'Media Placa', size: {height: 0.72, width: 3.20}}
                ],
                lot: 'DO0851-D'
            }
        ]
    },
    {
        name: 'Neolith',
        plates: [
            {
                namePlate: 'Zaha Stone',
                size: [
                    {type: 'Placa Entera', size: {height: 1.60, width: 3.20}},
                    {type: 'Media Placa', size: {height: 0.80, width: 3.20}}
                ],
                lot: 'NE0812-N'
            },
            {
                namePlate: 'Nero Marquina',
                size: [
                    {type: 'Placa Entera', size: {height: 1.60, width: 3.20}},
                    {type: 'Media Placa', size: {height: 0.80, width: 3.20}}
                ],
                lot: 'NE0813-N'
            }
        ]
    },
    {
        name: 'Granito',
        plates: [
            {
                namePlate: 'Gris Mara',
                size: [
                    {type: 'Placa Entera', size: {height: 0, width: 0}} //medidas a cargar por el usuario
                ],
                lot: 'SA0645-G'
            },
            {
                namePlate: 'Negro Boreal',
                size: [
                    {type: 'Placa Entera', size: {height: 0, width: 0}} //medidas a cargar por el usuario
                ],
                lot: 'SA0646-G'
            }
        ]
    },
    {
        name: 'Mármol',
        plates: [
            {
                namePlate: 'Blanco Carrara',
                size: [
                    {type: 'Placa Entera', size: {height: 0, width: 0}} //medidas a cargar por el usuario
                ],
                lot: 'SE0645-M'
            },
            {
                namePlate: 'Blanco Turco',
                size: [
                    {type: 'Placa Entera', size: {height: 0, width: 0}} //medidas a cargar por el usuario
                ],
                lot: 'SE0646-M'
            }
        ]
    }
]