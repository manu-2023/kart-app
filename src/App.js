// src/App.js
import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
//import "./App.css"; 


const products = [
  { id: 1, name: "Mango", price: 10 },
  { id: 2, name: "Apple", price: 15 },
  { id: 3, name: "Pineapple", price: 20 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="app">
      <h1>Simple Shopping Cart</h1>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
}

export default App;