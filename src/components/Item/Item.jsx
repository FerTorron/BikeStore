import "./Item.css"

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='bikeItem'>
            <img src={img} alt={nombre} />
            <p> {nombre} </p>
            <span> $ {precio} </span>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Item