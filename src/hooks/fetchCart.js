import React, { useState, useEffect } from 'react';

function fetchCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(storedProducts);
  }, []);

  function saveToStorage(newCart) {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setProducts(newCart);
  }

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalPriceFormatted = totalPrice.toFixed(2);

  const totalQuantity = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  function addProduct(product) {
    const updatedCart = [...products, product];
    saveToStorage(updatedCart);
  }

  function removeProduct(id) {
    const updatedCart = products.filter(item => item.id !== id);
    saveToStorage(updatedCart);
  }

  function updateQuantity(id, operacao) {
    const updatedCart = products.map(product => {
      if (product.id === id) {
        const newQuantity =
          operacao === 'plus' ? product.quantity + 1 : product.quantity - 1;

        if (newQuantity <= 0) return product;

        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    saveToStorage(updatedCart);
  }

  function setCart(newCart) {
    saveToStorage(newCart);
  }

  function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  return {
    products,
    totalPriceFormatted,
    totalQuantity,
    addProduct,
    removeProduct,
    updateQuantity,
    setCart,
    clearCart,
  };
}

export default fetchCart;
