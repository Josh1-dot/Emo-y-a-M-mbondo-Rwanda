import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './EmptyPage.css';

function Culture() {
  const { t } = useTranslation();

  return (
    <div className="empty-page">
      <Container>
        <div className="empty-content">
          <h1>{t('artsculture')}</h1>
          <p className="empty-message">{t('emptyMessage')}</p>
          <p className="empty-submessage">{t('comingSoon')}</p>
        </div>
      </Container>
    </div>
  );
}

export default Culture;
