import './Checkout.css'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'

const Checkout = () => {
    const [nombre, setNombre] = useState("Coki")
    const [apellido, setApellido] = useState("Argento")
    const [telefono, setTelefono] = useState(1127157354)
    const [email, setEmail] = useState("email@gmail.com")
    const [emailConfirmacion, setEmailConfirmacion] = useState("email@gmail.com")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    const manejadorForm = (event) => {
        event.preventDefault()
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completa los Campos")
            return
        }

        if (telefono.length > 10) {
            setError("El Número de Teléfono no es Válido")
            return
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del Email no son iguales")
            return
        }

        const orden = {
            items: carrito.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                    })
                    .catch((error) => {
                        console.log(error)
                        setError("Error al Crear la Orden, vuelva a intentarlo")
                    })
            })
            .catch((error) => {
                console.log(error)
                setError("No se puede actualizar el Stock")
            })

    }

    return (
        <div className='checkoutContainer'>
            <h2>Checkout</h2>
            <p>Completa tus datos para finalizar la compra</p>
            <form onSubmit={manejadorForm}>
                <div className="itemsCheckoutContainer">
                    <h3>Resumen de Compra</h3>
                    <hr />
                    {
                        carrito.map(producto => (
                            <div className='itemCheckout' key={producto.item.id}>
                                <div className="infoItemCheckout">
                                    <p>{producto.item.nombre} x{producto.cantidad}</p>
                                    <span>${producto.item.precio}</span>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                </div>
                <hr className='separadorMedio' />
                <div className='formInputs'>
                    <h3>Datos Personales</h3>
                    <hr />
                    <div className="inputNames">
                        <input type="text" placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input type="text" placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <input type="number" placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='email' placeholder='Repita el Email' value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

                    {
                        error && <p>{error}</p>
                    }
                    <button type='submit'>Realizar Compra</button>
                </div>
            </form>

            {
                ordenId && (
                    <strong className='msgFinal'>Gracias por tu Compra. N°{ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout