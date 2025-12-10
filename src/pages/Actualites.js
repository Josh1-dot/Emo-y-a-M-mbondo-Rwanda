import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Actualites.css';

function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Exemple de données d'actualités (sera remplacé par API)
  const newsData = [
    {
      id: 1,
      title: "Réunion Mensuelle de Décembre",
      category: "reunion",
      date: "10 Décembre 2025",
      author: "Comité Organisateur",
      excerpt: "La réunion mensuelle se tiendra le 15 décembre à 14h au centre communautaire. Plusieurs sujets importants seront abordés...",
      image: "📅",
      urgent: true
    },
    {
      id: 2,
      title: "Célébration du Mariage de Jean et Marie",
      category: "evenement",
      date: "8 Décembre 2025",
      author: "Famille Mukundi",
      excerpt: "La communauté célèbre l'union de Jean Mukundi et Marie Bahati. La cérémonie aura lieu le 20 décembre...",
      image: "💒"
    },
    {
      id: 3,
      title: "Recherche d'Emploi - Opportunités",
      category: "annonce",
      date: "7 Décembre 2025",
      author: "Bureau des Services",
      excerpt: "Plusieurs opportunités d'emploi disponibles pour les membres de notre communauté. Postes dans différents secteurs...",
      image: "💼"
    },
    {
      id: 4,
      title: "Naissance dans la Famille Kalume",
      category: "communaute",
      date: "5 Décembre 2025",
      author: "Famille Kalume",
      excerpt: "Nous avons la joie d'annoncer la naissance de bébé Emmanuel dans la famille Kalume. Mère et bébé se portent bien...",
      image: "👶"
    },
    {
      id: 5,
      title: "Initiative Jeunesse - Atelier de Formation",
      category: "evenement",
      date: "3 Décembre 2025",
      author: "Comité Jeunesse",
      excerpt: "Atelier de formation en entrepreneuriat pour les jeunes de la communauté. Inscriptions ouvertes...",
      image: "🎓"
    },
    {
      id: 6,
      title: "Collecte de Fonds pour la Solidarité",
      category: "annonce",
      date: "1 Décembre 2025",
      author: "Comité Solidarité",
      excerpt: "Lancement d'une collecte de fonds pour soutenir les familles dans le besoin. Chaque contribution compte...",
      image: "💰"
    }
  ];

  const categories = [
    { value: 'all', label: 'Toutes', count: newsData.length },
    { value: 'reunion', label: 'Réunions', count: newsData.filter(n => n.category === 'reunion').length },
    { value: 'evenement', label: 'Événements', count: newsData.filter(n => n.category === 'evenement').length },
    { value: 'annonce', label: 'Annonces', count: newsData.filter(n => n.category === 'annonce').length },
    { value: 'communaute', label: 'Vie Communautaire', count: newsData.filter(n => n.category === 'communaute').length }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div className="actualites-page">
      {/* Header */}
      <section className="page-header">
        <Container>
          <h1>Actualités de la Communauté</h1>
          <p>Restez informé de toutes les nouvelles de notre communauté à Kigali</p>
        </Container>
      </section>

      {/* Content */}
      <Container className="actualites-content">
        <Row>
          {/* Sidebar */}
          <Col lg={3} className="sidebar">
            <Card className="filter-card">
              <Card.Body>
                <h5>Catégories</h5>
                <div className="category-filters">
                  {categories.map(cat => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? 'warning' : 'outline-secondary'}
                      className="category-btn"
                      onClick={() => setSelectedCategory(cat.value)}
                    >
                      {cat.label} <Badge bg="secondary">{cat.count}</Badge>
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>

            <Card className="action-card">
              <Card.Body>
                <h5>Publier une Actualité</h5>
                <p>Vous avez une information à partager ?</p>
                <Button variant="warning" className="w-100">
                  Soumettre
                </Button>
              </Card.Body>
            </Card>

            <Card className="info-card">
              <Card.Body>
                <h5>📧 Newsletter</h5>
                <p>Recevez les actualités par email</p>
                <Form>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Votre email" />
                  </Form.Group>
                  <Button variant="warning" className="w-100 mt-2">
                    S'abonner
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* News List */}
          <Col lg={9}>
            <div className="news-header">
              <h3>
                {selectedCategory === 'all' 
                  ? 'Toutes les Actualités' 
                  : categories.find(c => c.value === selectedCategory)?.label
                }
              </h3>
              <span className="news-count">{filteredNews.length} article(s)</span>
            </div>

            <Row>
              {filteredNews.map(news => (
                <Col lg={6} key={news.id} className="mb-4">
                  <Card className={`news-item ${news.urgent ? 'urgent' : ''}`}>
                    {news.urgent && <div className="urgent-badge">🔔 Urgent</div>}
                    <Card.Body>
                      <div className="news-icon">{news.image}</div>
                      <div className="news-meta">
                        <span className="news-date">📅 {news.date}</span>
                        <span className="news-author">✍️ {news.author}</span>
                      </div>
                      <Card.Title>{news.title}</Card.Title>
                      <Card.Text>{news.excerpt}</Card.Text>
                      <div className="news-footer">
                        <Button variant="outline-warning" size="sm">
                          Lire la suite →
                        </Button>
                        <div className="news-actions">
                          <span className="action-btn">👍 15</span>
                          <span className="action-btn">💬 8</span>
                          <span className="action-btn">↗️</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="pagination-section">
              <Button variant="outline-secondary">← Précédent</Button>
              <span className="page-info">Page 1 sur 3</span>
              <Button variant="outline-secondary">Suivant →</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Actualites;
