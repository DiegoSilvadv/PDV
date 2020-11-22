const Sequelize = require('sequelize');

class Produto extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            produto: Sequelize.STRING,
            estoque: Sequelize.DECIMAL(18, 4),
            valor_venda: Sequelize.DECIMAL(18, 4),
            status: Sequelize.STRING,
            unidade_comercial: Sequelize.STRING,
            qtde_promocional: Sequelize.DECIMAL(18, 6),
            fator: Sequelize.DECIMAL(18, 3),
            }, {
                sequelize
            }
        );

        return this
    }
}

module.exports = Produto;