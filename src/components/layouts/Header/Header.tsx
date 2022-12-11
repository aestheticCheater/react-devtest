import { NavLink, To } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import './style.css';
import { urls } from 'config';
import { useUserContext } from 'components/UserContext';

interface HeaderLink {
  children: string,
  to: To
}

const navLinks: HeaderLink[] = [
  {
    to: urls.liveCasinoGames,
    children: 'Live Casino Games'
  },
  {
    to: urls.slotGames,
    children: 'Slot Games'
  }
]


const Header = () => {

  const {balance} = useUserContext()

  return (
    <div className="header">
      <div className='container header-content'>
        <div>
          <img className='header__logo' src={logo} alt="logo"/>
        </div>
        <div className='nav'>
          {
            navLinks.map((link) => (
              <NavLink className={({isActive}) => `${isActive ? 'nav-link--active' : ''} nav-link`} {...link} key={link.children} />
            ))
          }
        </div>
        <div className='header__balance'>
          <span className="header__balance-text">
            FETask, 
          </span>
          <span className="header__balance-balance">
            ${balance}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;