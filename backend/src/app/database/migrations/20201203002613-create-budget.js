'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orcamentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id'
        }
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id'
        },
      },
      data_venda: {
        allowNull: false,
        type: Sequelize.DATE
      },
      hora_venda: {
        allowNull: false,
        type: Sequelize.DATE
      },
      valor_final: {
        type: Sequelize.DECIMAL(18, 6),
        allowNull: false,
      },
      status_venda: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      nome_cliente: {
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      endereco_cliente: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fone_cliente: {
        type: Sequelize.STRING,
        allowNull: true,
      },  
      cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      cancelado: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      situacao: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      obs: {
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      data_cancelamento: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('orcamentos');
  }
};
