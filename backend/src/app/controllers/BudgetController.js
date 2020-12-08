const Orcamento = require('../models/Budget');

class BudgetController {
    async store(req, res){
        const budget = await Orcamento.create(req.body);
        return res.json(budget);
    }

    async index(req, res){
        const budget = await Orcamento.findAll();
        return res.json(budget);
    }
}

module.exports = new BudgetController();