import React from 'react';
import Navbar from './Navbar';
import logo from '../images/logo_transparent.png';

export default function Header() {
    return (
        <header>
            <div className="row justify-content-center">
                <img className="bg-light rounded-circle" src={logo} alt="MoneyXChange" style={{ width: '100px' }} />
            </div>
            <Navbar />
        </header>
    );

}