// conexao do front end com backend
const axios = require('axios').default;

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;