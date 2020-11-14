const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('host', 'root', 'skate2013', {
    host: 'localhost',
    dialect: 'mysql'
})

const Product = sequelize.define('produtos', {
    produto: {
        type: Sequelize.STRING
    },
    estoque: {
        type: Sequelize.DECIMAL(18,4)
    },
    valor_venda: {
        type: Sequelize.DECIMAL(18,4)
    },
    status: {
        type: Sequelize.STRING
    },
    unidade_comercial: {
        type: Sequelize.STRING
    },
    qtde_promocional: {
        type: Sequelize.DECIMAL(18,6)
    }, 
    fator: {
        type: Sequelize.DECIMAL(18,3)
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




