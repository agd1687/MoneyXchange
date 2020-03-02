import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#calculator">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Rates Table</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Monthly Average</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/" aria-disabled="true">Historic Lookup</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}