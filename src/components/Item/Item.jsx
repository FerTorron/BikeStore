import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='bikeItem'>
            <img src={img} alt={nombre} />
            <p> {nombre} </p>
            <span> $ {precio} </span>
            <Link onClick={scrollToTop} to={`/item/${id}`}>Ver Producto</Link>
        </div>
    )
}

export default Item