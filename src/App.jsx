import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"¡Hola! Bienvenido a BikeStore"} />
    </>
  )
}

export default App;