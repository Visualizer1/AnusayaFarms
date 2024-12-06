// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import './ProductList.css';

// function ProductList() {
//   const { t } = useTranslation();
//   const products = t('productList', { returnObjects: true });
//   console.log(products);

//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <div key={product.id} className="product-item">
//           <img src={`/images/${product.image}.jpeg`} alt={product.name} className="product-photo" />
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>{product.price}</p>
//           <a href="https://wa.me/919422600668" className="whatsapp-link">Order via WhatsApp</a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProductList.css';

function ProductList() {
  const { t } = useTranslation();
  const products = t('productList', { returnObjects: true });

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState('');

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const message = `I would like to order ${quantity} kg of ${product.name}`;
  const whatsappLink = `https://wa.me/919422600668?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-item">
      <img src={`https://visualizer1.github.io/AnusayaFarms/images/${product.image}.jpeg`} alt={product.name} className="product-photo" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="Enter quantity in kg"
        className="quantity-input"
      />
      <a href={whatsappLink} className="whatsapp-link">Order via WhatsApp</a>
    </div>
  );
}

export default ProductList;