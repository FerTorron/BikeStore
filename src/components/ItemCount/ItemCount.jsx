import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }
    return (
        <>
            <div className='countContainer'>
                <button className='btnCount' onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button className='btnCount' onClick={incrementar}> + </button>
            </div>
            <button className='btnAddCart' onClick={() => funcionAgregar(contador)}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount