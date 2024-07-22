import ItemListContainer from "./assets/components/ItemListContainer"
import NavBar from "./assets/components/NavBar"

function App() {
  let valor = 5

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a nuestro E-commerce"}/>
    </>
  )
}

export default App
