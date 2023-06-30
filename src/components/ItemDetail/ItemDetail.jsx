import './ItemDetail.css'
const ItemDetail = ({ id, nombre, precio, img, description }) => {
    return (
        <div className='itemDetail'>
            <div className="itemDetailImg">
                <img src={img} alt={nombre} />
            </div>
            <div className="itemDetailInfo">
                <h2> {nombre} </h2>
                <p>{description}</p>
                <span> ${precio} </span>
                <button>Agregar</button>
            </div>
        </div>
    )
}

export default ItemDetail