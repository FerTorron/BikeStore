import './BgInicio.css'

const BgInicio = (props) => {
    return (
        <section className="bgInicio">
            <h1> {props.title} </h1>
            <p> {props.description} </p>
        </section>
    )
}

export default BgInicio