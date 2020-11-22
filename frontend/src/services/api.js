// conexao do front end com backend
import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:3333',
  
});


export default api;