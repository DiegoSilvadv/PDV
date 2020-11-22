import React, { useState, useEffect} from 'react';
import Header from '../../components/header/header';
import api from '../../services/api';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';




import './style.css';
import '../../globalStyle/style.css';





export default function Product(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("http://localhost:3333/products")
          .then((response) => {
            console.log(response);
            setProducts(response.data);
          })
          .catch((error) => console.log(error));
      }, []);

    



    return(
        <div className="content">
            <div className="container">
                <Header />
                <div className="products">
                    <div className="wrapper">
                        <p>Produtos</p>
                        <input type="text" placeholder="Codigo, descrição"></input>
                        {/* <button type="button" onClick={() => SearchProduct()}> */}
                            <FiSearch size={20} color="#ffffff" />
                        {/* </button> */}
                    </div>
                    
                    {products.map(product => 
                        <div className="product" key={product.id} >
                            <p>ID: { product.id } </p>
                            <p>Descrição: {product.produto} </p>
                            <p>valor venda: {product.valor_venda}</p>
                            <p>Estoque: {product.estoque}</p>
                            <p>Fator: {product.fator}</p>
                            <p>QTD promo: 10</p>
                            <p>Valor promo:4</p>
                        </div>               
                    )}  
                </div>
            </div>
        </div>
        
    );
    
}
