import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // navbar section 

        <div className="header mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/home">
                        <h3><span className="logo-text">Singer Hub</span></h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Header;