const productos = [
    { id: 1, nombre: "Rocky Mountain", precio: 11499, img: "/img/products/rockyMountain.jpg", idCat: "1" },
    { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg", idCat: "2" },
    { id: 3, nombre: "Orbea Onna 10", precio: 929, img: "/img/products/orbeaOnna10.jpeg", idCat: "1" },
    { id: 3, nombre: "Orbea Onna 30", precio: 929, img: "/img/products/orbeaOnna30.jpeg", idCat: "1" },
    { id: 3, nombre: "Orbea Terra", precio: 929, img: "/img/products/orbeaTerra.jpg", idCat: "1" },
    { id: 4, nombre: "Orbea Onna 20", precio: 5099, img: "/img/products/orbeaOnna20.jpeg", idCat: "2" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}