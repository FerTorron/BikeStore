const productos = [
    { id: 1, nombre: "Rocky Mountain", precio: 11.499, img: "/img/products/rockyMountain.jpg", idCat: "1" },
    { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg", idCat: "2" },
    { id: 1, nombre: "Rocky Mountain", precio: 11.499, img: "/img/products/rockyMountain.jpg", idCat: "1" },
    { id: 2, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/orbeaOizM10.jpeg", idCat: "2" }
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