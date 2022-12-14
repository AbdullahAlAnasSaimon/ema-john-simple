import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  // console.log(cart);
  let total = 0;
  let shippingCharge = 0;
  let quantity = 0;
  for(const product of cart){
    quantity += product.quantity;
    total += (product.price * product.quantity);
    shippingCharge += product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shippingCharge + tax;

  return (
    <div className='cart'>
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shippingCharge}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;