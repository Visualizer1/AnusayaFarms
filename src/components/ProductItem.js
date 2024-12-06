// import React from 'react';
// import './ProductItem.css';

// function ProductItem({ product }) {
//     console.log(product);
//   return (
//     <div className="product-item">
//       {/* <img src="/images/bannerImage.jpeg" alt="Banner" className="banner-photo" /> */}
//       <img src={`/images/${product.Image}`} alt={product.name} className="product-photo" />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>{product.price}</p>
//       <a href="https://wa.me/919422600668?text=test" className="whatsapp-link">Order via WhatsApp</a>
//     </div>
//   );
// }

// export default ProductItem;

import React, { useState } from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState('');

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const message = `I would like to order ${quantity} kg of ${product.name}`;
  const whatsappLink = `https://wa.me/919422600668`;
console.log('---',process)
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

export default ProductItem;