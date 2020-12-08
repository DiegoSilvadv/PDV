const Sequelize = require('sequelize');

const Product = require('../models/Products');
const Customer = require('../models/Customers');
const Budget = require('../models/Budget');

const db = require('../../config/database');

const models = [Product, Customer, Budget];


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