import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

function CartWidget() {
    const { cantidadTotal } = useContext(CarritoContext)
    return (
        <div className='cartDiv'>
            <Link to="/cart">
                <img src="/img/icons/cartBasket.svg" alt="" />
                {
                    cantidadTotal > 0 && <span>{cantidadTotal}</span>
                }
            </Link>
        </div>
    )
}

export default CartWidget