import { useState } from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const menuBtn = () => {
        setNavOpen(!navOpen)
    }

    return (
        <header id="header">
            <div className="headerNav">
                <div className="logoBike">
                    <Link to="/">
                        <img src="/img/logo/bs-logo-orange.png" alt="Logo BikeStore" />
                    </Link>
                </div>
                <nav id="nav" className={navOpen ? "displayNav" : null}>
                    <ul>
                        <li onClick={menuBtn}><NavLink to="/categoria/mtb">MTB</NavLink></li>
                        <li onClick={menuBtn}><NavLink to="/categoria/accesorios">Accesorios</NavLink></li>
                        <li onClick={menuBtn}><NavLink to="/categoria/ebike">EBIKE</NavLink></li>
                    </ul>
                </nav>
                <svg
                    onClick={menuBtn}
                    id="btn-menu"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M4 18L20 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                        ></path>
                        <path
                            d="M4 12L20 12"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                        ></path>
                        <path
                            d="M4 6L20 6"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                        ></path>
                    </g>
                </svg>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar