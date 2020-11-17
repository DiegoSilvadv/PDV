import React from 'react';
import { Link } from 'react-router-dom';
import { FiArchive, FiShoppingCart, FiUsers, FiArrowLeft } from "react-icons/fi";

import './style.css';
import '../../globalStyle/style.css';




export default function Home() {
    return(
        <div class="content">
            <div class="container">
                <div class="header">
                    <div class="arrow">
                        <Link to="/landing">
                            <FiArrowLeft size={20} color="#262626" />
                        </Link> 
                    </div> 
                </div>

                <div class="main">
                    <div class="content-wrapper">
                        <Link to="/produtos">
                            <FiArchive size={35} color="#ffffff" />
                            <p>Produtos</p>
                        </Link>
                    </div>

                    <div class="content-wrapper">
                        <Link to="/clientes">
                            <FiUsers size={35} color="#ffffff" />
                            <p>Clientes</p>
                        </Link>
                    </div>

                    <div class="content-wrapper">
                        <Link to="/pedidos">
                            <FiShoppingCart size={35} color="#ffffff" />
                            <p>Pedidos</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
