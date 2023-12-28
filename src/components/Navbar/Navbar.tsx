import { Link } from 'react-router-dom';
import './Navbar.css';
import search from '../../assets/images/Header/search.svg';
import shopping from '../../assets/images/Header/shopping-icon.svg';
import user from '../../assets/images/Header/user-icon.svg';
import hamburger from '../../assets/images/Header/hamburger.svg';
import { useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
   setOpenMenu(prev => !prev)
    }

  return (
        <header>
          <div className='header-top'>
            <div className='header-left'>
                <div className='lang'>Az</div>
                <img className='search-icon' src={search} alt="search-icon" />
            </div>
            <div className="logo"><Link to="/"><strong>HomeDecor</strong></Link></div>
            <div className='header-right'>
                <img className='shop-img' src={shopping} alt="shopping-img" />
                <img className='user-img' src={user} alt="shopping-img" />
            </div>
          </div>
          <div className="burger">
            <img className='mobile-search-icon' src={search} alt="search-icon" />
            <img onClick={handleClick} src={hamburger} alt="hamburger-icon" />
          </div>
       { openMenu &&  <nav className="navbar">
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
          </nav> }
        </header> 
  )
}

export default Navbar