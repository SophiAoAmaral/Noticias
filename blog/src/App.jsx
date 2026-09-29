import { Route, Routes } from "react-router"
import { Header } from "./components/Header/Header"
import './index.css'
import { Home } from "./components/Header/Home/Home"
import { Categorias } from "./components/Header/Categorias"
import { SearchResults } from "./components/Header/SearchResults"
function App() {
  return (
    <>
    
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categoria/:categoria" element={<Categorias />} />
      <Route path="/search" element={<SearchResults />} />
     </Routes>
    </>
  )
}

export default App
