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

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actualites" element={<Actualites />} />
          {/* Autres routes à ajouter */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
