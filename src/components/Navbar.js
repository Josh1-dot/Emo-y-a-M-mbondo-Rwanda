import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded} className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-text">BABEMBE</span>
          <span className="brand-subtitle">Community</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" onClick={() => setExpanded(false)}>
            <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
            
            <NavDropdown title={t('culture')} id="culture-dropdown">
              <NavDropdown.Item as={Link} to="/histoire">{t('history')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/methali">{t('methali')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cheria">{t('cheria')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/langue">{t('language')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/culture">{t('artsculture')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gastronomie">{t('gastronomy')}</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={t('news')} id="news-dropdown">
              <NavDropdown.Item as={Link} to="/actualites">{t('allNews')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/evenements">{t('events')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/annonces">{t('announcements')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vie-communautaire">{t('communityLife')}</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/galerie">{t('gallery')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t('contact')}</Nav.Link>
            
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
