import { BrowserRouter, Route, Routes } from 'react-router-dom';

// COMPONENTES
import Navbar from './components/Navbar/Navbar'
import BgInicio from './components/BgInicio/BgInicio'
import NewUsed from './components/NewUsed/NewUsed';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
      {/* <BgInicio title={"Tienda de Bicicletas"} description={"El paraíso para los Amantes del Ciclismo"} />
      <NewUsed />
      <ItemListContainer /> */}

      <BrowserRouter>
        <Navbar />
        <BgInicio title={"Tienda de Bicicletas"} description={"El paraíso para los Amantes del Ciclismo"} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='*' element={<h2>Error</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;