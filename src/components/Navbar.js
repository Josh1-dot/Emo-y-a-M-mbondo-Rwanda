import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setExpanded(false);
    navigate(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded} className="custom-navbar">
      <Container>
        <Navbar.Brand onClick={() => handleNavClick('/')} style={{ cursor: 'pointer' }} className="brand-logo">
          <span className="brand-text">EMO Y'A M'MBONDO Rwanda</span>
          <span className="brand-subtitle">Community</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick('/')}>{t('home')}</Nav.Link>
            
            <NavDropdown title={t('culture')} id="culture-dropdown">
              <NavDropdown.Item onClick={() => handleNavClick('/histoire')}>{t('history')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/methali')}>{t('methali')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/cheria')}>{t('cheria')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/langue')}>{t('language')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/culture')}>{t('artsculture')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/gastronomie')}>{t('gastronomy')}</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={t('news')} id="news-dropdown">
              <NavDropdown.Item onClick={() => handleNavClick('/actualites')}>{t('allNews')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/evenements')}>{t('events')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/annonces')}>{t('announcements')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/vie-communautaire')}>{t('communityLife')}</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => handleNavClick('/galerie')}>{t('gallery')}</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/contact')}>{t('contact')}</Nav.Link>
            
            <Nav.Item className="d-flex align-items-center language-section">
              <span className="language-label">Langue:</span>
              <LanguageSwitcher />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
