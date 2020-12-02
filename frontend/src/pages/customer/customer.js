import React, {useEffect, useState} from 'react';
import Header from '../../components/header/header';
import api from '../../services/api';

import '../../globalStyle/style.css';
import './style.css';



function Customer() {

    const [customers, setCustomers] = useState([]);
    const [seachCustomer, setSeachCustomer] = useState('');

    useEffect(() => {
        api.get('/customers')
            .then((response) => {
                setCustomers(response.data);
            })
            .catch((error) => console.log(error));
    }, []);



    return (
        <div className="container">
            <Header />

            <div className="customers">
                <div className="wrapper">
                    <fieldset>
                        <legend>Clientes</legend>
                    </fieldset>
                    <input 
                        type="text" 
                        enable
                        value={seachCustomer}
                        onChange={(e)=> setSeachCustomer(e.target.value)}
                        placeholder="codigo, cpf, cnpj, nome, endereço"
                    ></input>
                </div>

                { seachCustomer === '' ? customers.map(customer => 
                    <div className="customer">
                        <p>Nome: {customer.cliente}</p> 
                        <p>Razão: {customer.raz_social}</p> 
                        <p>CNPJ/CPF: {customer.cpf_cnpj}</p> 
                        <p>Rua:  {customer.logradouro}</p> 
                        <p>Número: {customer.numero}</p> 
                        <p>Bairro:  {customer.bairro}</p> 
                        <p>Cidade:  {customer.municipio}</p> 
                        <p>UF:  {customer.uf}</p> 
                        <p>Fone:  {customer.fone}</p> 
                        <p>Celular:  {customer.celular}</p> 
                    </div>

                ) : customers.filter(customer => 
                            customer.cliente === seachCustomer || 
                            customer.id === seachCustomer || 
                            customer.logradouro === seachCustomer || 
                            customer.bairro === seachCustomer ||
                            customer.cpf_cnpj === seachCustomer
                        )
                            .map(customer => (
                                <div className="customer">
                                    <p>Nome: {customer.cliente}</p> 
                                    <p>Razão: {customer.raz_social}</p> 
                                    <p>CNPJ/CPF: {customer.cpf_cnpj}</p> 
                                    <p>Rua:  {customer.logradouro}</p> 
                                    <p>Número: {customer.numero}</p> 
                                    <p>Bairro:  {customer.bairro}</p> 
                                    <p>Cidade:  {customer.municipio}</p> 
                                    <p>UF:  {customer.uf}</p> 
                                    <p>Fone:  {customer.fone}</p> 
                                    <p>Celular:  {customer.celular}</p> 
                                </div>
                ))}

            </div>
            
        </div>
    )
}

export default Customer;