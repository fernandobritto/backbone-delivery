'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
        id:  {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'

        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        age: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        cpf: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        address: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        phone: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        created_at: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false
        },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('customers');
  }
};
