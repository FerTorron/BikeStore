import React from 'react'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div>
            <img src={img} alt={nombre} />
            <h2> {nombre} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque neque odit ad quibusdam dolor voluptas? Illo ullam itaque ex velit tempore soluta, veniam facere nihil ratione, et numquam pariatur.
            </p>
            <span> {precio} </span>
        </div>
    )
}

export default ItemDetail