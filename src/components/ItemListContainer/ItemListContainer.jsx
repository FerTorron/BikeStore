import { useState, useEffect } from "react";
import './ItemListContainer.css'
// import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import BgInicio from "../BgInicio/BgInicio";
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/config'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos")
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos)
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    // useEffect(() => {
    //     const funcion = idCategoria ? getProductosPorCategoria : getProductos;

    //     funcion(idCategoria)
    //         .then(res => setProductos(res))

    // }, [idCategoria])
    return (
        <>
            <BgInicio title={"Tienda de Bicicletas"} description={"El paraíso para los Amantes del Ciclismo"} />
            <h2 className='titleGreeting'>Nuestros Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer