import { useState, useEffect } from "react";
import './ItemListContainer.css'
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import BgInicio from "../BgInicio/BgInicio";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))

    }, [idCategoria])
    return (
        <>
            <BgInicio title={"Tienda de Bicicletas"} description={"El paraíso para los Amantes del Ciclismo"} />
            <h2 className='titleGreeting'>Nuestros Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer