import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
  }, [])

  const handleAddToCart = (product) =>{
    // console.log(product);
    // cart.push(product); // do not use this method.
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  }
  return (
    <div className='shop-container'>
      <div className="products-container">
        <div className='products-child-container'>
          {products.map(product => <Product key={product.id}
            product={product}
            handleAddToCart = {handleAddToCart}
            ></Product>)}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart = {cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;