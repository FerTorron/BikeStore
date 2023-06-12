import Navbar from './components/Navbar/Navbar.jsx'
import BgInicio from './components/BgInicio/BgInicio.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <BgInicio title={"Tienda de Bicicletas"} description={"El paraíso para los Amantes del Ciclismo"} />
      <ItemListContainer greeting={"¡Hola! Bienvenido a BikeStore"} />
    </>
  )
}

export default App;