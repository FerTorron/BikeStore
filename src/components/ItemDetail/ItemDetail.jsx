import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, description, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const { agregarProducto } = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = { id, nombre, precio }
        agregarProducto(item, cantidad)

    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='itemDetail'>
            <div className="itemDetailImg">
                <img src={img} alt={nombre} />
            </div>
            <div className="itemDetailInfo">
                <h2> {nombre} </h2>
                <p>{description}</p>
                <span> ${precio} </span>
                {
                    agregarCantidad > 0 ? (<Link onClick={scrollToTop} to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail