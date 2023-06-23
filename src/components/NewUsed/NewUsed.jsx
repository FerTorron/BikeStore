import './NewUsed.css'
import NewUsedItem from '../NewUsedItem/NewUsedItem'

const NewUsed = () => {
    return (
        <div className="newUsedBg">
            <div className='bikesItemContainer'>
                <NewUsedItem title="Una bicicleta siempre nueva con Easy Ride" description="La fórmula Easy Ride: el placer de andar en bicicleta siempre
                nueva a bajo costo."/>
                <NewUsedItem title="Intercambio y evaluación utilizados" description="¿Quieres cambiar tu bicicleta y no sabes cuál es su valor real?
                        Encuéntralo ahora."/>
            </div>
        </div>
    )
}

export default NewUsed