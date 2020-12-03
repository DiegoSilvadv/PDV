'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
      }, 
      produto: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      estoque: {
        type: Sequelize.DECIMAL(18, 4),
        allowNull: false,
      }, 
      valor_venda: {
        type: Sequelize.DECIMAL(18, 4),
        allowNull: false,
      }, 
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      unidade_comercial: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      qtde_promocional: {
        type: Sequelize.DECIMAL(18, 6),
        allowNull: false,
      }, 
      fator: {
        type: Sequelize.DECIMAL(18, 3),
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
    return queryInterface.dropTable('produtos');
  }
};


 


