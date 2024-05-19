import './Cart.css';
import CartItem from './CartItem';
import { useState, useEffect } from 'react';
import Image1 from '../images/bg_4.jpg';

export default function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [showForm, setShowForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckout = () => {
    calculateTotalPrice();
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Order is Confirmed');
    setShowForm(false);
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const calculateTotalPrice = () => {
    var total =0; 
    cart.forEach(el => {
      total = total + el.price * el.quantity
    });
    setTotalPrice(total);
  };

  return (
    <>
      <div className='cartItemsContainer'>
        {cart.length !== 0 ? (
          <>
            {cart.map((el) => (
              <CartItem item={el} setCart={setCart} cart={cart} key={el.id} />
            ))}
            <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>

          </>
        ) : (
          <h1>empty cart</h1>
        )}
      </div>
      {showForm && (
        <div className="formPopup">
          <div className="formContainer">
            <form onSubmit={handleFormSubmit}>
              <h2>Checkout Form</h2>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Address:
                <input type="text" name="address" required />
              </label>
              <label>
                Card Number:
                <input type="number" min={10000000000000} max={99999999999999} name="cardNumber" required />
              </label>
              <label>
                Expired date:
                <input type="date" name="expiryDate" required />
              </label>
              <label>
                CVV:
                <input type="number" min={100} max={999} name="cvv" required />
              </label>
              <label>
                Total price: ${totalPrice}
              </label>
              <button type="submit"  >Confirmation</button>
              <button type="button" onClick={handleCloseForm}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
