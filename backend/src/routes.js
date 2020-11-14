const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ ola: 'fads' });
});

module.exports = routes;