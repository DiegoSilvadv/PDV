const express = require('express');
var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const ProductController = require('./app/controllers/ProductController');
const CustomerController = require('./app/controllers/CustomerController');


const routes = express.Router();

routes.get('/products', cors(corsOptions), ProductController.index);
routes.post('/products', cors(corsOptions), ProductController.store);


routes.get('/customers', cors(corsOptions), CustomerController.index);
routes.post('/customers', cors(corsOptions), CustomerController.store);


module.exports = routes;