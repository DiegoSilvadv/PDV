import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import './style.css';

export default function Header(){
    return(
        <div className="header">
            <div className="arrow">
                <Link to="/landing">
                    <FiArrowLeft size={20} color="#ffffff" />
                </Link> 
            </div> 
        </div>
    )
}