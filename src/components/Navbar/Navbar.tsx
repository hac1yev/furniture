import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
        <header className="second-header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Pravicy Policy</a></li>
                    <li><a href="">Legal Pages</a></li>
                </ul>
            </nav>
        </header>
        
    </>
  )
}

export default Navbar