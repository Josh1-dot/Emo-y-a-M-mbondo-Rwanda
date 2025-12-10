import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import './Home.css';

function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    // Animation au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observer tous les éléments avec la classe scroll-animation
    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center">
              <Col lg={8} className="hero-content">
                <h1 className="hero-title animate-fade-in">
                  {t('welcomeTitle')} <span className="highlight">{t('babembeKigali')}</span>
                </h1>
                <p className="hero-subtitle">
                  {t('subtitle')}
                </p>
                <p className="hero-description">
                  {t('description')}
                </p>
                <div className="hero-buttons">
                  <Button as={Link} to="/histoire" variant="warning" size="lg" className="me-3">
                    {t('ourHistory')}
                  </Button>
                  <Button as={Link} to="/actualites" variant="outline-light" size="lg" className="me-3">
                    {t('newsLabel')}
                  </Button>
                  <div className="d-inline-flex align-items-center hero-language-section">
                    <span className="hero-language-label">Langue:</span>
                    <LanguageSwitcher />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section scroll-animation">
        <Container>
          <Row>
            <Col md={3} sm={6} className="stat-item scroll-animation" style={{animationDelay: '0.1s'}}>
              <div className="stat-icon">🏛️</div>
              <h3>500+</h3>
              <p>{t('yearsOfHistory')}</p>
            </Col>
            <Col md={3} sm={6} className="stat-item scroll-animation" style={{animationDelay: '0.2s'}}>
              <div className="stat-icon">👥</div>
              <h3>1000+</h3>
              <p>{t('membersInKigali')}</p>
            </Col>
            <Col md={3} sm={6} className="stat-item scroll-animation" style={{animationDelay: '0.3s'}}>
              <div className="stat-icon">🎭</div>
              <h3>50+</h3>
              <p>{t('liveTraditions')}</p>
            </Col>
            <Col md={3} sm={6} className="stat-item scroll-animation" style={{animationDelay: '0.4s'}}>
              <div className="stat-icon">📰</div>
              <h3>{t('weekly')}</h3>
              <p>{t('newsLabel')}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <Container>
          <div className="section-header scroll-animation">
            <h2>{t('ourCulture')}</h2>
            <p>{t('culturalHeritage')}</p>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="culture-card scroll-animation" style={{animationDelay: '0.1s'}}>
                <div className="card-icon">💬</div>
                <Card.Body>
                  <Card.Title>{t('methali')}</Card.Title>
                  <Card.Text>
                    {t('methaliDesc')}
                  </Card.Text>
                  <Button as={Link} to="/methali" variant="warning">
                    {t('discover')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="culture-card scroll-animation" style={{animationDelay: '0.2s'}}>
                <div className="card-icon">⚖️</div>
                <Card.Body>
                  <Card.Title>{t('cheria')}</Card.Title>
                  <Card.Text>
                    {t('cheriaDesc')}
                  </Card.Text>
                  <Button as={Link} to="/cheria" variant="warning">
                    {t('discover')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="culture-card scroll-animation" style={{animationDelay: '0.3s'}}>
                <div className="card-icon">🗣️</div>
                <Card.Body>
                  <Card.Title>{t('language')}</Card.Title>
                  <Card.Text>
                    {t('languageDesc')}
                  </Card.Text>
                  <Button as={Link} to="/langue" variant="warning">
                    {t('discover')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* News Section */}
      <section className="news-section">
        <Container>
          <div className="section-header scroll-animation">
            <h2>{t('communityNews')}</h2>
            <p>{t('stayInformed')}</p>
          </div>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="news-card scroll-animation" style={{animationDelay: '0.1s'}}>
                <Card.Body>
                  <div className="news-badge">Nouveau</div>
                  <Card.Title>Réunion Communautaire - Décembre 2025</Card.Title>
                  <Card.Text>
                    La prochaine réunion mensuelle aura lieu le 15 décembre. Ordre du jour : 
                    préparation des fêtes de fin d'année et initiatives 2026.
                  </Card.Text>
                  <div className="news-meta">
                    <span>📅 10 Décembre 2025</span>
                  </div>
                  <Button as={Link} to="/actualites" variant="outline-warning">
                    {t('readMore')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="news-card scroll-animation" style={{animationDelay: '0.2s'}}>
                <Card.Body>
                  <div className="news-badge">Événement</div>
                  <Card.Title>Célébration Culturelle Annuelle</Card.Title>
                  <Card.Text>
                    Rejoignez-nous pour notre grande fête culturelle annuelle avec danses 
                    traditionnelles, gastronomie et expositions.
                  </Card.Text>
                  <div className="news-meta">
                    <span>📅 5 Décembre 2025</span>
                  </div>
                  <Button as={Link} to="/evenements" variant="outline-warning">
                    {t('readMore')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/actualites" variant="warning" size="lg">
              {t('seeAllNews')}
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section scroll-animation">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2>{t('joinCommunity')}</h2>
              <p>
                {t('joinDesc')}
              </p>
            </Col>
            <Col lg={4} className="text-end">
              <Button as={Link} to="/contact" variant="light" size="lg">
                {t('contactUs')}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
