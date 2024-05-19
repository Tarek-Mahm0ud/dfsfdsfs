import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Deyalis(){
    const { id } = useParams();
    const menu_url = "https://fakestoreapi.com/products";
    const [pizza_list,setpizza] = useState(null);


    const addToCartHandler = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const found = cart.filter((el) => el.id === pizza_list.id);
    
        if (found.length !== 0)
          cart.forEach((el) => {
            if (el.id === pizza_list.id) el.quantity++;
          })
        else {
          cart.push({ ...pizza_list, quantity: 1 });
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
    }


    useEffect(() => {
      fetch(`${menu_url}/${id}`)
        .then((res) => res.json())
        .then((data) => setpizza(data));
    }, [id]);

    if (!pizza_list) {
      return <div>Loading...</div>;
    }

    return(
        <>
      <div >
        <div className="photo">
          <img src={pizza_list.image} alt="photo" width="300" height="300" />
        </div>
        <div className="info">
          <h3>{pizza_list.title}</h3>
          <p>
            {pizza_list.description}</p>
          <h4 className="price">{pizza_list.price}</h4>
          {/* <button className="order"><a href="/#" class="new-customer" style = "text-decoration: none; color : white">Order</a></button> */}
          <button className="btn btn-primary" onClick={addToCartHandler}>order</button>
        </div>
      </div>
    </>

    );
      
}

export default Deyalis;
