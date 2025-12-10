import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5>À Propos</h5>
            <p>
              Site de la communauté Babembe de Kigali. 
              Préservons notre culture et restons connectés.
            </p>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5>Liens Rapides</h5>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/actualites">Actualités</Link></li>
              <li><Link to="/methali">Methali</Link></li>
              <li><Link to="/evenements">Événements</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5>Contact</h5>
            <ul className="footer-contact">
              <li><i className="bi bi-geo-alt"></i> Kigali, Rwanda</li>
              <li><i className="bi bi-envelope"></i> contact@babembe-kigali.org</li>
              <li><i className="bi bi-phone"></i> +250 XXX XXX XXX</li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </Col>
        </Row>
        
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Communauté Babembe Kigali. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
