import { Link } from "react-router-dom";
import React from 'react'
import './Header.css'

function Header() {
    return <nav className="navbar navbar-expand-lg navbar-light bd-navbar">
        <a className="navbar-brand" href="/#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Features</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>
            </ul>
        </div>
    </nav>

}
export default Header;