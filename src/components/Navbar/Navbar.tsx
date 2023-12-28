import { Link } from 'react-router-dom';
import './Navbar.css';
import search from '../../assets/images/Header/search.svg';
import shopping from '../../assets/images/Header/shopping-icon.svg';
import user from '../../assets/images/Header/user-icon.svg';
import hamburger from '../../assets/images/Header/hamburger.svg';

const Navbar = () => {
  return (
        <header>
          <div className='header-top'>
            <div className='header-left'>
                <div>AZ</div>
                <img src={search} alt="search-icon" />
            </div>
            <div className="logo"><Link to="/"><strong>HomeDecor</strong></Link></div>
            <div className='header-right'>
                <img src={shopping} alt="shopping-img" />
                <img src={user} alt="shopping-img" />
            </div>
          </div>
          <div className="burger">
            <img src={hamburger} alt="hamburger-icon" />
          </div>
          <nav className="navbar">
            
            <ul className="links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/products">
                    <li>Product</li>
                </Link>
                <Link to="/collections">
                    <li>Collections</li>
                </Link>
                <Link to="/sale">
                    <li>Sale</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
          </nav>
        </header> 
  )
}

export default Navbar