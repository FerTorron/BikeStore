import './NewUsedItem.css'

const NewUsedItem = (props) => {
    return (
        <div className="bikeArticle newBikeArticle">
            <h2> {props.title} </h2>
            <p> {props.description} </p>
            <button>Ver Más</button>
        </div>
    )
}

export default NewUsedItem