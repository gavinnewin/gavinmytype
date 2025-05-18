import { Link } from 'react-router-dom';
import './Navbar.css'; // for styling

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="logo">gavinmytype</Link>
      <nav className="navbar">
        <Link to="/" className="active">Home</Link>
        <Link to="/about" className="active">About</Link>
        <Link to="/links" className="active">Product Links</Link>
        <Link to="/monkeytype" className="active">GavinType</Link> {/* was gavintype.html */}
        <Link to="/keytester" className="active">KeyTester</Link>
        <a href="mailto:gavinnguyen.contact@gmail.com" className="active" target="_blank" rel="noopener noreferrer">Contact</a> {/* external email */}
      </nav>
    </header>
  );
}

export default Navbar;
