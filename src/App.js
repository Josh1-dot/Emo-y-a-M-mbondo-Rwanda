import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './i18n';
import './App.css';

// Components
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Actualites from './pages/Actualites';
import Histoire from './pages/Histoire';
import Methali from './pages/Methali';
import Cheria from './pages/Cheria';
import Langue from './pages/Langue';
import Culture from './pages/Culture';
import Gastronomie from './pages/Gastronomie';
import Evenements from './pages/Evenements';
import Annonces from './pages/Annonces';
import VieCommunautaire from './pages/VieCommunautaire';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/methali" element={<Methali />} />
          <Route path="/cheria" element={<Cheria />} />
          <Route path="/langue" element={<Langue />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/gastronomie" element={<Gastronomie />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/annonces" element={<Annonces />} />
          <Route path="/vie-communautaire" element={<VieCommunautaire />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
