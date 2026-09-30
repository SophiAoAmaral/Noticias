import { Route, Routes } from "react-router"
import { Header } from "./components/Header/Header"
import './index.css'
import { Home } from "./components/Header/Home/Home"
import { Categorias } from "./components/Header/Categorias"
import { SearchResults } from "./components/Header/SearchResults"
import { ThemeProvider } from "./context/ThemeContext"
function App() {
  return (
    <>
    <ThemeProvider>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categoria/:categoria" element={<Categorias />} />
      <Route path="/search" element={<SearchResults />} />
     </Routes>
     </ThemeProvider>
    </>
  )
}

export default App
