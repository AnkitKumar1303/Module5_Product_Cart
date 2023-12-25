// src/components/Cart.js

import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
