import './Cart.css'
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay Productos en el Carrito</h2>
                <Link to="/">Volver al Home</Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}

export default Cart