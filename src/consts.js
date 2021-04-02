export const API_config = [
    {
        id:1,
        nome:"Honório Bicalho",
        embarques:{
            embarque1:{nome:"local1", valor:"R$ 200"},
            embarque2:{nome:"local2", valor:"R$ 200"},
        }
    },
    {
        id:2,
        nome:"Centro de Nova Lima",
        embarques:{
            embarque1:{nome:"local11", valor:"R$ 500"},
            embarque2:{nome:"local22", valor:"R$ 1000"},
        }
    },
    {
        id:3,
        nome:"Centro de Lima Nova",
        embarques:{
            embarque1:{nome:"local111", valor:"R$ 300"},
            embarque2:{nome:"local222", valor:"R$ 500"},
        }
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
            { id:1, nome:"Gabriel Luciano - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:true},
            { id:2, nome:"Gabriel Luciano - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:false},
        ]
    },
    {
        id:0,
        embarque:"Bicalho Honório",
        desembarque:"Centro de Lima Nova",
        motorista:"Cleiton Nascimento",
        pontos:[
            { id:0, nome:"Gabriel Luciano - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:true},
            { id:1, nome:"Gabriel Luciano - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:false},
            { id:2, nome:"Gabriel Luciano - 31985620561 - Praça Da Estação - Praça Do Mineiro", status:false},
        ]
    }
]