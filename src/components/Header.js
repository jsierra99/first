import React from 'react';
import "./header.scss";

const Header = () => 
{
    return (
        <header>
            <h3>SUBLIME Tech</h3>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#history">History</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
