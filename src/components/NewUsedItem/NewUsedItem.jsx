/* eslint-disable react/prop-types */
import './NewUsedItem.css'

const NewUsedItem = ({ title, description }) => {
    return (
        <div className="bikeArticle newBikeArticle">
            <h2> {title} </h2>
            <p> {description} </p>
            <button>Ver Más</button>
        </div>
    )
}

export default NewUsedItem