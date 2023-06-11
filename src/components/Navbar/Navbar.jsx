import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

const Navbar = () => {
    // const menuBtn = () => {

    // }
    return (
        <header id="header">
            <div className="headerNav">
                <div className="logoBike">
                    <img src="../public/cartBasket.svg" alt="Logo BikeStore" />
                </div>
                <nav id="nav">
                    <ul>
                        <li>Inicio</li>
                        <li>Bicis</li>
                        <li>Accesorios</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <svg
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