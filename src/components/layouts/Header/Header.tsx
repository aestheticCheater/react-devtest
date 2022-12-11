import { NavLink, To } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import './style.css';

interface HeaderLink {
  children: string,
  to: To
}

const navLinks: HeaderLink[] = [
  {
    to: '/',
    children: 'Live Casino Games'
  },
  {
    to: '/slot-games',
    children: 'Slot Games'
  }
]


const Header = () => {
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
            $123s
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;