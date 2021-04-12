export const API_config = [
    {
        id:0,
        nome:"Honório Bicalho",
        pontos:[
            {
                id:0,
                nome:"Rua Joanas Morais Lordão",
                tipo:"dominante",
                valor:"200",
                horarios:["11:00", "12:00", "23:00"]
            },
            {
                id:1,
                nome:"Rua Professora Mária Ester",
                tipo:"secundario",
                valor:"150",
                horarios:["11:00", "23:00"]
            },
        ]
    },
    {
        id:1,
        nome:"Centro de Nova Lima",
        pontos:[
            {
                id:0,
                nome:"Rua Edinho Silva Pontes",
                tipo:"secundario",
                valor:"300",
                horarios:["11:00"]
            },
            {
                id:1,
                nome:"Rua Vasco da Gama Ladeira",
                tipo:"dominante",
                valor:"350",
                horarios:["23:00"]
            },
        ]
    },
];

export const API_passageiros = [
    {
        id:0,
        nome:"Adson Justino Silva",
        telefone:"(83) 987745514",
        status:"Ativo"
    },
    {
        id:1,
        nome:"Petrus Pierre Ormesino Bento",
        telefone:"(83) 987745514",
        status:"Desativo"
    },
];

export const API_motoristas = [
    {
        id:0,
        nome:"Raquel Patrício Moraes",
        telefone:"(83) 987745514",
        status:"Ativo"
    },
    {
        id:1,
        nome:"Cleiton Nascimento",
        telefone:"(83) 987745514",
        status:"Desativo"
    },
]

export const API_relatorios = [
    {
        motorista:"Raquel Patrício Moraes",
        viagens:"25",
        valor:"R$ 1600",
        receber:"R$ 200"
    },
    {
        motorista:"Cleiton Nascimento",
        viagens:"30",
        valor:"R$ 2500",
        receber:"R$ 100"
    },
]

export const API_viagens = [
    {
        id:0,
        embarque:"Honório Bicalho",
        desembarque:"Centro de Nova Lima",
        motorista:"Raquel Patrício Moraes",
        pontos:[
            { id:0, nome:"Gabriel Luciano - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:true},
            { id:1, nome:"Paulo Eduardo - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:true},
            { id:2, nome:"Lima Barreto - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:false},
        ]
    },
    {
        id:1,
        embarque:"Bicalho Honório",
        desembarque:"Centro de Lima Nova",
        motorista:"Cleiton Nascimento",
        pontos:[
            { id:0, nome:"Allan Ribeiro - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:true},
            { id:1, nome:"Adisson Adson Tejo - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:false},
            { id:2, nome:"Cleiton Nascimento - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:false},
        ]
    }
]