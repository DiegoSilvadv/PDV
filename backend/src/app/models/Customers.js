const Sequelize = require('sequelize');

class Cliente extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            cliente: Sequelize.STRING,
            raz_social:Sequelize.STRING,
            cpf_cnpj: Sequelize.STRING,
            logradouro: Sequelize.STRING,
            numero: Sequelize.STRING,
            bairro: Sequelize.STRING,
            cep: Sequelize.STRING,
            municipio: Sequelize.STRING,
            uf: Sequelize.STRING,
            fone: Sequelize.STRING,
            celular: Sequelize.STRING,
            }, {
                sequelize
            }
        );

        return this
    }
}

module.exports = Cliente;