import Navbar from "./components/Navbar/navbar.jsx"
import { categorias } from "./mock/mockData.js"
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import './App.css'
function App() {
  
    
  return (
    <>
    <div><Navbar categorias={categorias}/></div>
    <div><ItemlistContainer/></div>
    
    </>
  )
}

export default App
