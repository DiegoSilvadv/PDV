import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import Logo from '../../images/logo.svg';

import './style.css';

export default function Header(){
    return(
        <div className="header">
            <div className="arrow">
                <Link to="/">
                    <FiArrowLeft size={20} color="#ffffff" />
                </Link> 
            </div> 
            <div className="logo">
                <img src={Logo} alt="logo"></img>
            </div>
            
        </div>
    )
}