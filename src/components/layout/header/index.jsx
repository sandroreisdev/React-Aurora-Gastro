import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo-restaurante.svg'
import './style.css'

export const Header = () => {
    return(
        <header>
            <img src={logo} alt="Logo Aurora Gastrô" />

            <nav className="nav-header">
                <ul>
                    <li className='nav-header-item'><Link to='/'>Home</Link></li>
                    <li className='nav-header-item'><Link to='/cardapio'>Cardápio</Link></li>
                    <li className='nav-header-item'><Link to='/sobre'>Sobre nós</Link></li>
                    <li className='nav-header-item'><Link to='/contato'>Contato</Link></li>                   
                </ul>
            </nav>

            <a href="" className='btn-header'>Reserve agora</a>

        </header>
    )
}