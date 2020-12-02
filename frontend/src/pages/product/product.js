import React, { useState, useEffect} from 'react';
import Header from '../../components/header/header';
import api from '../../services/api';
// import { FiSearch } from 'react-icons/fi';
// import axios from 'axios';

import './style.css';
import '../../globalStyle/style.css';

export default function Product(){

    const [products, setProducts] = useState([]);
    const [seachProduct, setSeachProduct] = useState('');

    // listagem de produtos
    useEffect(() => {
        api.get('/products')
          .then((response) => {
            // console.log(response);
            setProducts(response.data);
          })
          .catch((error) => console.log(error));
      }, []);

    return(
            <div className="container">
                <Header />
                <div className="products">
                    <div className="wrapper">
                        <fieldset>
                            <legend>Produtos</legend>
                        </fieldset>
                        <input 
                            type="text" 
                            enable
                            value={seachProduct}
                            placeholder="Codigo, descrição"
                            onChange={(e) => setSeachProduct(e.target.value)}
                        ></input>
                    </div>

                    {seachProduct === ''? products.map(product => 
                                <div className="product" key={product.id} >
                                    <p>ID: { product.id } </p>
                                    <p>Descrição: {product.produto} </p>
                                    <p>valor venda: {product.valor_venda}</p>
                                    <p>Estoque: {product.estoque}</p>
                                    <p>Fator: {product.fator}</p>
                                    <p>QTD promo: 10</p>
                                    <p>Valor promo:4</p>
                                </div>                 
                            ) : products.filter(product => product.produto === seachProduct || product.id === seachProduct ).map(product => (
                                    <div className="product" key={product.id} >
                                        <p>ID: { product.id } </p>
                                        <p>Descrição: {product.produto} </p>
                                        <p>valor venda: {product.valor_venda}</p>
                                        <p>Estoque: {product.estoque}</p>
                                        <p>Fator: {product.fator}</p>
                                        <p>QTD promo: 10</p>
                                        <p>Valor promo:4</p>
                                        
                                    </div>     
                            )) }
                              
                </div>
            </div>
        
    );
    
}

// {/* 
// // products.filter(product => product.produto == seachProduct || seachProduct !== product.id ).map(product => (
// //     <div className="product" key={product.id} >
// //         <p>ID: { product.id } </p>
// //         <p>Descrição: {product.produto} </p>
// //         <p>valor venda: {product.valor_venda}</p>
// //         <p>Estoque: {product.estoque}</p>
// //         <p>Fator: {product.fator}</p>
// //         <p>QTD promo: 10</p>
// //         <p>Valor promo:4</p>
        
// //     </div>     
// // ))  */}


// {/* <div className="buttons"> */}
                            
//                                 {/* <div className="add">
//                                     <button className="less" onClick={handleAdd(product.id)}>-</button>
//                                     <input 
//                                         disabled
//                                         id="numberAdd"
//                                         value={numberAdd}
//                                         onChange={(e) => setNumberAdd(numberAdd)}
//                                     />
//                                     <button className="more" >+</button>    
//                                 </div>
//                                 <div className="button-add">
//                                     <button type="button">Adionar <small>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(product.valor_venda)}</small></button>
//                                 </div> */}
//                             {/* </div>     */}