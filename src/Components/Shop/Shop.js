import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id)
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) =>{
    console.log(selectedProduct);
    // cart.push(product); // do not use this method.
    let newCart = [];
    const exitst = cart.find(product => product.id === selectedProduct);

    if(!exitst){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else{
      const rest = cart.filter(product => product.id !== selectedProduct);
      exitst.quantity = exitst.quantity + 1;
      newCart = [...rest, exitst];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
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