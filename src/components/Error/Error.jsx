import './Error.css'

const Error = () => {
    return (
        <div className="errorContainer">
            <div className='errorCartel'>
                <span>🚫</span>
                <h2>Error 404</h2>
                <p>No pudimos encontrar la página que buscabas</p>
            </div>
        </div>
    )
}

export default Error