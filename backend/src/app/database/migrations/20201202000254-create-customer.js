'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
      },
      cliente:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      raz_social:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf_cnpj:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      logradouro:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      municipio:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      uf:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      fone:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      celular:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
     
    })
    






  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
