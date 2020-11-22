const express = require('express');
var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const ProductController = require('./app/controllers/ProductController');


const routes = express.Router();

routes.get('/products', cors(corsOptions), ProductController.index);
routes.post('/products', cors(corsOptions), ProductController.store);

module.exports = routes;