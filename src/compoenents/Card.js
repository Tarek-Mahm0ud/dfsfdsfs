import { Link } from 'react-router-dom';
import './Card.css'
import Deyalis from './Deyalis';

function Card({ card }) {
  const { id } = card;

  const addToCartHandler = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cart.filter((el) => el.id === id);

    if (found.length !== 0)
      cart.forEach((el) => {
        if (el.id === id) el.quantity++;
      })
    else {
      cart.push({ ...card, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }


  return (
    <>
      <div className="card">
        <div className="photo">
          <img src={card.image} alt="photo" width="300" height="300" />
        </div>
        <div className="info">
          <h3>{card.title}</h3>
          <h4 className="price">{card.price}</h4>
          {/* <button className="order"><a href="/#" class="new-customer" style = "text-decoration: none; color : white">Order</a></button> */}
          <button className="btn btn-primary" onClick={addToCartHandler}>order</button>
          <Link to={`/product/${id}`}>
            <button className="btn btn-secondary">View Details</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Card;