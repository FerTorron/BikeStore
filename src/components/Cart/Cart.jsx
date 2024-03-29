import './Cart.css'
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
    if (cantidadTotal === 0) {
        return (
            <div className='carritoVacio'>
                <h2>No hay Productos en el Carrito</h2>
                <Link to="/">Volver al Home</Link>
            </div>
        )
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='cartContainer'>
            <h2>Carrito</h2>
            <div className="cartItemContainer">
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            </div>
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <div className="buttonsCart">
                <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link onClick={scrollToTop} to="/checkout">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart