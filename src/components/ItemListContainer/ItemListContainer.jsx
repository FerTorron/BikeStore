import './ItemListContainer.css'

const ItemListContainer = () => {
    const productos = [
        { id: 1, nombre: "Rocky Mountain", precio: 11.499, img: "/img/products/rockyMountain.jpg" },
        { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg" },
        { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg" },
        { id: 1, nombre: "Rocky Mountain", precio: 11.499, img: "/img/products/rockyMountain.jpg" },
        { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg" },
        { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg" },
        { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg" }
    ]
    return (
        <>
            <h2 className='titleGreeting'>Nuestros Productos</h2>
            <ul className='listBikes'>
                {
                    productos.map(producto => (
                        <li className='bikeItem' key={producto.id}>
                            <img src={producto.img} alt={producto.nombre} />
                            <p> {producto.nombre} </p>
                            <span> $ {producto.precio} </span>
                            <button>Agregar al Carrito</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ItemListContainer