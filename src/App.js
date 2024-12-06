import React from 'react';
// import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';
import './i18n';

function App() {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className="App">
      <Header />
      {/* <h1>{t('welcome')}</h1> */}
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;