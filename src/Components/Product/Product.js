import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStarOfLife } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
  const {handleAddToCart, product} = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className='product'>
      <img src={img ? img : 'No Image Found'} alt="" />
      <div className='product-info'>
        <h2 className='product-name'>{name}</h2>
        <h3 className='product-price'>Price: ${price}</h3>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} <FontAwesomeIcon icon = {faStarOfLife}></FontAwesomeIcon></p>
      </div>
      <button className='btn-cart' onClick={() => handleAddToCart(product)}>
        <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
      </button>
    </div>
  );
};

export default Product;