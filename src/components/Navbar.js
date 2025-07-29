
import { Link } from 'react-router-dom';
import logo from '../rasm/logo.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <ul className="font">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="bat">
        <button onClick={handleLoginClick} className="button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
