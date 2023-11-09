// src/components/Product.js
import React from "react";

function Product({ product, onAddToCart }) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
