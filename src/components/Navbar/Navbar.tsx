import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
        <header>
    <div className="logo"><Link to="/"><strong>LogoOfBrand</strong></Link></div>
        <div className="burger "><i className="ri-menu-line icon"></i></div>
        <nav className="navbar">
            <ul className="icons">
                <Link to="">
                    <li><i className="ri-account-circle-line icon" title="Account"></i></li>
                </Link>
                <Link to="">
                    <li><i className="ri-shopping-basket-line icon" title="Shopping"></i></li>
                </Link>
            </ul>
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

        
    </>
  )
}

export default Navbar