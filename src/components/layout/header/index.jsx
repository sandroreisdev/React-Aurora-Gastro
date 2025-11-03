import logo from '../../../assets/images/logo-restaurante.svg'
import './style.css'

export const Header = () => {
    return(
        <header>
            <img src={logo} alt="Logo Aurora Gastrô" />

            <nav className="nav-header">
                <ul>
                    <li className='nav-header-item'><a href="">Home</a></li>
                    <li className='nav-header-item'><a href="">Cardápio</a></li>
                    <li className='nav-header-item'><a href="">Sobre nós</a></li>
                    <li className='nav-header-item'><a href="">Contato</a></li>                   
                </ul>
            </nav>

            <a href="" className='btn-header'>Reserve agora</a>

        </header>
    )
}