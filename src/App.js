// src/App.js

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './products';
import './styles.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <h1>E-commerce Cart Management System</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
    </div>
  );
};

export default App;
