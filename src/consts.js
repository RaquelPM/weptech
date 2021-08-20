export const API_config = [
    {
        id:0,
        nome:"Honório Bicalho",
        pontos:[
            {
                id:0,
                nome:"Rua Joanas Morais Lordão",
                tipo:"dominante",
                referencia:"Escola são josé",
                horarios:["11:00", "12:00", "23:00"]
            },
            {
                id:1,
                nome:"Rua Professora Mária Ester",
                referencia:"Escola josé são",
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
                referencia:"Escola são josefina",
                horarios:["11:00"]
            },
            {
                id:1,
                nome:"Rua Vasco da Gama Ladeira",
                tipo:"dominante",
                referencia:"Escola josefina são",
                horarios:["23:00"]
            },
        ]
    },
];

export const API_config_rotas = [
    {
        id:0,
        bairro1:'Honório Bicalho',
        bairro2:'Bicalho Honório',
        price:'R$ 100,00',
        tempo:"11:30",
    },

    {
        id:1,
        bairro1:'Funcionários II',
        bairro2:'Bessa',
        price:'R$ 400,00',
        tempo:"11:50",
    },
]

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

export const API_financeiro_apagar = [
    {
        período:'01 / 11/ 2020',
        motorista:'Raquel Patrício Moraes',
        telefone:'839877455014',
        valor:'R$ 100,00',
        desconto:'-',
        total:'R$ 100,00',
        status:'A pagar'
    },
    {
        período:'01 / 12/ 2020',
        motorista:'Cleitom Nascimento',
        telefone:'839871516014',
        valor:'R$ 1000,00',
        desconto:'R$ 200,00',
        total:'R$ 800,00',
        status:'A pagar'
    },
    {
        período:'12 / 01/ 2021',
        motorista:'Raquel Patrício Moraes',
        telefone:'839877455014',
        valor:'R$ 500,00',
        desconto:'-',
        total:'R$ 500,00',
        status:'A pagar'
    },
    {
        período:'01 / 08/ 2021',
        motorista:'Cleitom Nascimento',
        telefone:'839877455014',
        valor:'R$ 700,00',
        desconto:'R$ 100,00',
        total:'R$ 600,00',
        status:'A pagar'
    },
]

export const API_financeiro_pago = [
    {
        período:'01 / 12/ 2020',
        motorista:'Cleitom Nascimento',
        telefone:'839871516014',
        valor:'R$ 1000,00',
        desconto:'R$ 200,00',
        total:'R$ 800,00',
        status:'Pago'
    },
    {
        período:'01 / 08/ 2021',
        motorista:'Cleitom Nascimento',
        telefone:'839877455014',
        valor:'R$ 700,00',
        desconto:'R$ 100,00',
        total:'R$ 600,00',
        status:'Pago'
    },
    {
        período:'12 / 01/ 2021',
        motorista:'Raquel Patrício Moraes',
        telefone:'839877455014',
        valor:'R$ 500,00',
        desconto:'-',
        total:'R$ 500,00',
        status:'Pago'
    },
    {
        período:'01 / 11/ 2020',
        motorista:'Raquel Patrício Moraes',
        telefone:'839877455014',
        valor:'R$ 100,00',
        desconto:'-',
        total:'R$ 100,00',
        status:'Pago'
    },
    {
        período:'06 / 11/ 2020',
        motorista:'Raquel Patrício Moraes',
        telefone:'839877455014',
        valor:'R$ 800,00',
        desconto:'-',
        total:'R$ 800,00',
        status:'Pago'
    },
]