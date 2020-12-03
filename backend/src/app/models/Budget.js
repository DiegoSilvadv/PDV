const Sequelize = require('sequelize');

class Orcamento extends Sequelize.Model {
    static init(sequelize) {
        super.init({
                idProduto: Sequelize.INTEGER,
                idCliente: Sequelize.INTEGER,
                data_venda: Sequelize.DATE,
                hora_venda: Sequelize.DATE,
                valor_final: Sequelize.DECIMAL(18, 6),
                status_venda: Sequelize.STRING,
                nome_cliente: Sequelize.STRING,
                endereco_cliente: Sequelize.STRING,
                fone_cliente: Sequelize.STRING,
                cpf_cnpj: Sequelize.STRING,
                cancelado: Sequelize.STRING,
                situacao: Sequelize.STRING,
                obs: Sequelize.STRING,
                data_cancelamento: Sequelize.DATE,
            }, 
            {
                sequelize
            }
        );
        return this
    }
}

module.exports = Orcamento;