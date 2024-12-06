import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>{t('brandName')}</h1>
        <p className="brand-tagline">{t('brandTagline')}</p>
      </div>
      <nav>
        <ul>
          <li><a href="#products">{t('products')}</a></li>
          <li><a href="#contact">{t('contact')}</a></li>
        </ul>
      </nav>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('mr')}>मराठी</button>
      </div>
    </header>
  );
}

export default Header;