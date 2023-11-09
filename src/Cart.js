
// src/components/Cart.js
import React from "react";

function Cart({ cart, onRemoveFromCart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
