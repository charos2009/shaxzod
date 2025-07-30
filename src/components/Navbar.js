import { Link } from 'react-router-dom';
import logo from '../rasm/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between  px-6 h-20 bg-black text-white">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-18 mr-5 mb-4 mt-[6px] " />

      {/* Menu */}
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-lime-400">Home</Link></li>
        <li><Link to="/product" className="hover:text-lime-400">Product</Link></li>
        <li><Link to="/about" className="hover:text-lime-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-lime-400">Contact</Link></li>
      </ul>

      {/* Button */}
      <button
        onClick={handleLoginClick}
        className="button"
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;
