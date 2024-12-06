import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <p>{t('contactUs')} <a href="https://wa.me/919422600668">919422600668</a></p>
      <p>{t('email')} info@anusaya.com</p>
      <p>{t('address')}</p>
    </footer>
  );
}

export default Footer;