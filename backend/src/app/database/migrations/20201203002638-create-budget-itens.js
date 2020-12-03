'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orcamento_itens', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      idOrcamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orcamentos',
          key: 'id'
        }
      },
      idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orcamentos',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.DECIMAL(18, 6),
        allowNull: false,
      },
      valor_unitario: {
        type: Sequelize.DECIMAL(18, 6),
        allowNull: false,
      },
      valor_produtos: {
        type: Sequelize.DECIMAL(18, 6),
        allowNull: false,
      },
      total_item: {
        type: Sequelize.DECIMAL(18, 6),
        allowNull: false,
      },
      cancelado:{
        type: Sequelize.STRING,
        allowNull: false,
      } 
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orcamento_itens');
  }
};
