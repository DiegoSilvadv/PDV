const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('host', 'root', 'skate2013', {
    host: 'localhost',
    dialect: 'mysql'
})


const Product = sequelize.define('produtos', {
    produto: {
        type: DataTypes.STRING
    },
    estoque: {
        type: DataTypes.DECIMAL(18,4)
    },
    valor_venda: {
        type: DataTypes.DECIMAL(18,4)
    },
    status: {
        type: DataTypes.STRING
    },
    unidade_comercial: {
        type: DataTypes.STRING
    },
    qtde_promocional: {
        type: DataTypes.DECIMAL(18,6)
    }, 
    fator: {
        type: DataTypes.DECIMAL(18,3)
    }
})

Product.create({ 
    produto: "teste",
    estoque: 17.00,
    valor_venda: 29.90,
    status: "ativo",
    unidade_comercial: "un",
    qtde_promocional: 10.00, 
    fator: 1.00 
 })


const Customer = sequelize.define('clientes', {
    cliente: {
        type: DataTypes.STRING
    },
    raz_social: {
        type: DataTypes.STRING
    },
    CPF_CNPJ: {
        type: DataTypes.STRING
    },
    logradouro: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.STRING
    },
    bairro: {
        type: DataTypes.STRING
    },
    CEP: {
        type: DataTypes.STRING
    },
    municipio: {
        type: DataTypes.STRING
    },
    UF:{
        type: DataTypes.STRING
    },
    fone: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
})

Customer.create({
    cliente: 'Diego da Silva',
    raz_social: 'Diego Silva',
    CPF_CNPJ: '47768432121',
    logradouro: 'rua paulo holtz',
    numero: '123',
    bairro: 'inocoop',
    CEP: '123234321',
    municipio: 'Tatuí',
    UF: 'SP',
    fone: '3214567897',
    celular: '1298987668909876',
})


const Budget = sequelize.define('orcamentos', {
    ID_CLIENTE: {
        type: DataTypes.INTEGER
    },
    ID_USUARIO: {
        type: DataTypes.INTEGER
    },
    ID_VENDEDOR: {
        type: DataTypes.INTEGER
    },
    desconto: {
        type: DataTypes.DECIMAL(18,6)
    },
    acrecimo: {
        type: DataTypes.DECIMAL(18,6)
    },
    valor_final: {
        type: DataTypes.DECIMAL(18,6)
    },
    total_produtos: {
        type: DataTypes.DECIMAL(18,6)
    },
    desconto_itens: {
        type: DataTypes.DECIMAL(18,6)
    },
    status_venda: {
        type: DataTypes.STRING
    },
    nome_cliente: {
        type: DataTypes.STRING
    },
    endereco_cliente: {
        type: DataTypes.STRING
    },
    fone_cliente: {
        type: DataTypes.STRING
    },
    cpf_cliente: {
        type: DataTypes.STRING
    },
    cancelado: {
        type: DataTypes.STRING
    },
    nome_computador: {
        type: DataTypes.STRING
    },
    obs: {
        type: DataTypes.STRING
    }
})

// Budget.sync({ alter: true })





