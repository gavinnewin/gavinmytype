import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // assuming you make a Navbar component
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Links from './pages/Links';
import Keytester from './pages/Keytester';
import Gavintype from './pages/Gavintype';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/links" element={<Links />} />
        <Route path="/keytester" element={<Keytester />} />
        <Route path="/monkeytype" element={<Gavintype />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
