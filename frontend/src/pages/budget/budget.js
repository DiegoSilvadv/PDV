import React from 'react';
import Header from '../../components/header/header';
import api from '../../services/api';
import { FiChevronUp, FiChevronDown, FiTrash, AiFillEdit } from 'react-icons/fi';

import '../../globalStyle/style.css';
import './style.css';

function Budget(){
    return(
        <div className="container">
           <Header /> 

           <div className="budgets">
                <div className="wrapper">
                    <fieldset>
                        <legend>Orçamentos</legend>
                    </fieldset>
                    <input 
                        type="text"
                        enable
                    ></input>
                </div>

                <div className="budget">
                    <strong>ID do Pedido 1 </strong>
                    <div className="customer">
                        <strong>Cliente</strong>
                        <p>Cliente: </p>
                        <p>CPF/CNPJ: </p>
                        <p>Endereço cliente: </p>
                        <p>Fone cliente: </p>
                            <button>
                                <FiTrash size={20} color="#3d7afd" />
                            </button>
                            <button>
                                <FiChevronUp size={20} color="#3d7afd" />
                            </button>
                    </div>

                    <div className="top-itens">
                        <strong>Itens da venda</strong>
                        <small>Clique para esconder os produtos</small>    
                        <button>
                            <FiChevronUp size={20} color="#3d7afd" />
                        </button>
                    </div>

                    <div className="budget-itens">
                        <p>ID item: </p>
                        <p>Item: </p>
                        <p>Quantidade: </p>
                        <p>Valor unitario: </p>
                        <p>Cancelado: </p>
                            <button>
                                <FiTrash size={20} color="#3d7afd" />
                            </button>
                    </div>

                    <div className="budget-itens">                        
                        <p>ID item: </p>
                        <p>Item: </p>
                        <p>Quantidade: </p>
                        <p>Valor unitario: </p>
                        <p>Cancelado: </p>
                            <button>
                                <FiTrash size={20} color="#3d7afd" />
                            </button>
                    </div>

                    <div className="budget-itens">                        
                        <p>ID item: </p>
                        <p>Item: </p>
                        <p>Quantidade: </p>
                        <p>Valor unitario: </p>
                        <p>Cancelado: </p>
                            <button>
                                <FiTrash size={20} color="#3d7afd" />
                            </button>
                    </div>
                    <div className="budget-itens">                        
                        <p>ID item: </p>
                        <p>Item: </p>
                        <p>Quantidade: </p>
                        <p>Valor unitario: </p>
                        <p>Cancelado: </p>
                            <button>
                                <FiTrash size={20} color="#3d7afd" />
                            </button>
                    </div>

                    <div className="bottom">
                    <p>Cancelado: </p>
                        <p>Obs: </p>
                        <p>Hora da venda:</p>
                        <p>Status da venda: </p>
                        <p>Valor final: </p>
                        <p>Total item: 2 </p> 
                        <p>Valor produtos: 100R$ </p>
                    </div>

                    <button id="final">Finalizar</button>
                </div>


           </div>
        </div>
    )
}

export default Budget;