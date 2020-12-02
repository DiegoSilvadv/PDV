const Cliente = require('../models/Customers');

class CustomerController {
    async store(req, res){
        const customer = await Cliente.create(req.body);
        return res.json(customer);
    }

    async index(req, res){
        const customers = await Cliente.findAll()
        return res.json(customers);
    }
}

module.exports = new CustomerController();