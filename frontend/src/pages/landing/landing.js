import React from 'react';
import Land from '../../images/landing.svg';
import {Link} from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../../globalStyle/style.css';

import './landing.css';

export default function Landing(){
    return(
        <div className="content" >
            <div className="container">
                <header>
                    <img src={Land} alt="landing"></img>
                </header>
                <main>
                    <h1>Bem vindo ao PDV!</h1>
                    <p>Com o nosso pdvmovel voce pode fazer integração com o sistema de gestão da sua loja e vender mais.</p>
                </main>
                <footer>
                    <p>Clique para continuar</p>
                    <Link to="/">
                        <FiArrowRight size={20} color="#ffffff" />
                    </Link>
                </footer>
            </div>
        </div>
    );
}
