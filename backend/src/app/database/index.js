const Sequelize = require('sequelize');

const Product = require('../models/Products');

const db = require('../../config/database');

const models = [Product];


class Database {
    constructor() {
        this.init();
    }

    init(){
        this.connection = new Sequelize(db)

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new Database();