import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='bikeItem'>
            <img src={img} alt={nombre} />
            <p> {nombre} </p>
            <span> $ {precio} </span>
            <Link to={`/item/${id}`}>Ver Producto</Link>
        </div>
    )
}

export default Item