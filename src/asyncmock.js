const productos = [
    { id: 1, nombre: "Orbea Oiz M10", precio: 5099, stock: 10, img: "/img/products/bicicletas/orbeaOizM10.jpeg", idCat: "mtb", description: "Ligera y ágil, cuadro de carbono, suspensión de alta gama, cambios suaves y frenos hidráulicos. Ideal para senderos desafiantes y velocidad." },
    { id: 2, nombre: "Orbea Onna 10", precio: 929, stock: 2, img: "/img/products/bicicletas/orbeaOnna10.jpeg", idCat: "mtb", description: "Versátil y resistente. Cuadro de carbono, suspensión avanzada, cambios precisos y frenos potentes. Rendimiento excepcional en todo tipo de terreno." },
    { id: 3, nombre: "Orbea Onna 30", precio: 1929, stock: 10, img: "/img/products/bicicletas/orbeaOnna30.jpeg", idCat: "mtb", description: "Aventurera y estable. Cuadro de carbono, suspensión trasera Maestro, horquilla ajustable y ruedas de 29. Ideal para terrenos difíciles y condiciones diversas." },
    { id: 4, nombre: "Orbea Onna 20", precio: 8099, stock: 3, img: "/img/products/bicicletas/orbeaOnna20.jpeg", idCat: "mtb", description: "Enduro de alta gama. Cuadro resistente, suspensión de calidad, geometría moderna y componentes premium. Perfecta para terrenos agresivos y rendimiento excepcional." },
    { id: 5, nombre: "Inflador", precio: 500, stock: 10, img: "/img/products/accesorios/inflador.png", idCat: "accesorios", description: "Compacto y portátil, el inflador de bicicleta ofrece un inflado rápido y fácil. Con conexión universal, manómetro integrado y diseño resistente, es imprescindible para mantener tus neumáticos en óptimas condiciones." },
    { id: 6, nombre: "Kit Llaves", precio: 800, stock: 2, img: "/img/products/accesorios/kitLlaves.jpg", idCat: "accesorios", description: "El kit de llaves para bicicleta es compacto y versátil. Con múltiples tamaños de llaves hexagonales, torx y destornilladores, es perfecto para ajustes y reparaciones rápidas en tu bicicleta." },
    { id: 7, nombre: "Esponja", precio: 100, stock: 10, img: "/img/products/accesorios/esponja.jpg", idCat: "accesorios", description: "La esponja para lavar la bicicleta es suave y absorbente. Con su textura especial, remueve la suciedad y el barro sin rayar la pintura. Ideal para mantener tu bicicleta limpia y reluciente." },
    { id: 8, nombre: "Manometro", precio: 900, stock: 10, img: "/img/products/accesorios/manometro.jpg", idCat: "accesorios", description: "El manómetro es compacto y preciso, proporcionando lecturas exactas de presión. Con una pantalla fácil de leer y conexión universal, es ideal para medir la presión de neumáticos, inflables y más." },
    { id: 9, nombre: "Candado", precio: 400, stock: 12, img: "/img/products/accesorios/candado.png", idCat: "accesorios", description: "El candado para bicicleta es resistente y seguro. Con diseño robusto y cierre de alta calidad, protege tu bicicleta contra robos. Fácil de usar y transportar, es indispensable para mantener tu bicicleta protegida en todo momento." },
    { id: 10, nombre: "Espejo", precio: 600, stock: 10, img: "/img/products/accesorios/espejo.jpg", idCat: "accesorios", description: "El espejo para bicicleta es compacto y ajustable. Proporciona una visión clara y amplia de lo que sucede detrás de ti, aumentando la seguridad al pedalear. Fácil de instalar y compatible con diferentes tipos de manillar." },
    { id: 11, nombre: "Rocky Mountain", precio: 1499, stock: 10, img: "/img/products/bicicletas/rockyMountain.jpg", idCat: "ebike", description: "Bicicleta eléctrica versátil y cómoda, ideal para paseos urbanos. Potente motor, batería de larga duración, cuadro resistente y componentes de calidad para un viaje suave y placentero." },
    { id: 12, nombre: "Pivot Shuffle", precio: 1800, stock: 8, img: "/img/products/bicicletas/pivotShuffle.png", idCat: "ebike", description: "Bicicleta de montaña eléctrica de alto rendimiento. Potente motor, batería de larga duración, suspensión avanzada y componentes robustos para enfrentar terrenos exigentes con facilidad y velocidad." },
    { id: 13, nombre: "Rise h20", precio: 2000, stock: 1, img: "/img/products/bicicletas/riseH20.jpeg", idCat: "ebike", description: "Bicicleta eléctrica urbana y práctica. Motor potente, batería de gran autonomía, cuadro resistente y accesorios versátiles, como portaequipajes y guardabarros, perfectos para desplazamientos diarios y carga adicional." },
    { id: 14, nombre: "Mondraker", precio: 2200, stock: 3, img: "/img/products/bicicletas/mondraker.jpeg", idCat: "ebike", description: "Bicicleta eléctrica de trekking cómoda y eficiente. Motor silencioso, batería integrada, cambio de marchas suave y geometría ergonómica para largos paseos en carretera y aventuras en terrenos mixtos." }
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
            const producto = productos.find(prod => prod.id == id);
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