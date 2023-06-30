const productos = [
    { id: 1, nombre: "Orbea Oiz M10", precio: 5099, img: "/img/products/bicicletas/orbeaOizM10.jpeg", idCat: "1" },
    { id: 2, nombre: "Orbea Onna 10", precio: 929, img: "/img/products/bicicletas/orbeaOnna10.jpeg", idCat: "1" },
    { id: 3, nombre: "Orbea Onna 30", precio: 1929, img: "/img/products/bicicletas/orbeaOnna30.jpeg", idCat: "1" },
    { id: 4, nombre: "Orbea Onna 20", precio: 8099, img: "/img/products/bicicletas/orbeaOnna20.jpeg", idCat: "1" },
    { id: 5, nombre: "Inflador", precio: 500, img: "/img/products/accesorios/inflador.png", idCat: "2" },
    { id: 6, nombre: "Kit Llaves", precio: 800, img: "/img/products/accesorios/kitLlaves.jpg", idCat: "2" },
    { id: 7, nombre: "Esponja", precio: 100, img: "/img/products/accesorios/esponja.jpg", idCat: "2" },
    { id: 8, nombre: "Manometro", precio: 900, img: "/img/products/accesorios/manometro.jpg", idCat: "2" },
    { id: 9, nombre: "Candado", precio: 400, img: "/img/products/accesorios/candado.png", idCat: "2" },
    { id: 10, nombre: "Espejo", precio: 600, img: "/img/products/accesorios/espejo.jpg", idCat: "2" },
    { id: 11, nombre: "Rocky Mountain", precio: 1499, img: "/img/products/bicicletas/rockyMountain.jpg", idCat: "3" },
    { id: 12, nombre: "Pivot Shuffle", precio: 1800, img: "/img/products/bicicletas/pivotShuffle.png", idCat: "3" },
    { id: 13, nombre: "Rise h20", precio: 2000, img: "/img/products/bicicletas/riseH20.jpeg", idCat: "3" },
    { id: 14, nombre: "Mondraker", precio: 2200, img: "/img/products/bicicletas/mondraker.jpeg", idCat: "3" }
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