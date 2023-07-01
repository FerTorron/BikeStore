import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="socialIcon">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
            </div>
            <hr />
            <p>Todos los derechos reservados a <a href="https://www.linkedin.com/in/fertorron/">FerTorrón</a></p>
        </footer>
    )
}

export default Footer