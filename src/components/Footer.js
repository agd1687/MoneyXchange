import React from 'react';
import logo from '../images/logo_transparent.png';

export default function Footer() {
    return (
        <footer className=" bg-light mt-3">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <a href="/" className="d-flex justify-content-center" style={{ width: "50px" }}><img src={logo} alt="Logo" className="w-100" /></a>
                    <p className="mb-0"><span className="font-italic">Copyright &copy;</span>2020 <span className="font-weight-bold">MoneyXchange</span></p>
                </div>
            </div>
        </footer>
    );
}