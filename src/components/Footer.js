import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5>{t('about')}</h5>
            <p>{t('aboutDesc')}</p>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5>{t('quickLinks')}</h5>
            <ul className="footer-links">
              <li><Link to="/">{t('home')}</Link></li>
              <li><Link to="/actualites">{t('allNews')}</Link></li>
              <li><Link to="/methali">{t('methali')}</Link></li>
              <li><Link to="/evenements">{t('events')}</Link></li>
              <li><Link to="/contact">{t('contact')}</Link></li>
            </ul>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5>{t('contactInfo')}</h5>
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
            <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
