import Navbar from './components/Navbar/Navbar'
import BgInicio from './components/BgInicio/BgInicio'
import NewUsed from './components/NewUsed/NewUsed';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar />
      <BgInicio title={"Tienda de Bicicletas"} description={"El paraíso para los Amantes del Ciclismo"} />
      <NewUsed />
      <ItemListContainer />
    </>
  )
}

export default App;