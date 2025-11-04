import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cardapio } from './pages/cardapio'
import { Contato } from './pages/contato'
import { Home } from './pages/home'
import { Produto } from './pages/produto'
import { Servico } from './pages/servico'
import { Sobre } from './pages/Sobre'
import { Page404 } from './pages/404'
import { Contador } from './pages/contador'
import { CardCEP } from './pages/cardCEP'

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
        <Route path='/contador' element={<Contador />} />
        <Route path='/cep' element={<CardCEP />} />
        <Route path='*' element={< Page404 />} />
      </Routes>

    </BrowserRouter>

  )
}
export default App







