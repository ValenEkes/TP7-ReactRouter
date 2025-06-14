import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import QuienesSomos from './QuienesSomos'
import Celulares from './Celulares'

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Quienes-Somos" element={<QuienesSomos/>}></Route>
    <Route path="/productos" element={<Celulares/>}></Route>
    <Route path="/productos/IdFotos:" element={<Celulares/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
