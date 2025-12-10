import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './EmptyPage.css';

function Methali() {
  const { t } = useTranslation();

  return (
    <div className="empty-page">
      <Container>
        <div className="empty-content">
          <h1>{t('methali')}</h1>
          <p className="empty-message">Cette page est encore vide...</p>
          <p className="empty-submessage">Le contenu sera ajouté bientôt.</p>
        </div>
      </Container>
    </div>
  );
}

export default Methali;
