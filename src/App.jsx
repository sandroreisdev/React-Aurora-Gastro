import './App.css'
import { Cardapio } from './pages/cardapio'
import { Contato } from './pages/contato'
import { Home } from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Produto } from './pages/produto'
import { Servico } from './pages/servico'
import { Sobre } from './pages/Sobre'
import { Page404 } from './pages/404'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/produto' element={<Produto />} />
        <Route path='/servico' element={<Servico />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='*' element={< Page404 />} />
      </Routes>

    </BrowserRouter>

  )
}
export default App







