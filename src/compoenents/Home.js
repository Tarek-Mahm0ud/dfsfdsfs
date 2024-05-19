import Image1 from '../images/about.jpg';

  
function Home() {
  return (
    <>
    <section className="home" id="home">
      <div className="imag_1">
        <img src={Image1} alt="about photo" width="800" height="600"/>
      </div>
      <div className="home-text">
        <h2 className="welcom-segment">WELCOME TO ABOEL-DAHAB PIZZA RESTAURANT</h2>
        <p>
          Welcome to Aboeldahab Pizza Restaurant, where we take pride in serving you the best pizzas in town. Our restaurant offers a warm and inviting atmosphere, making it the perfect place for you to sit back, relax, and enjoy a delicious meal with family and friends.

At Aboeldahab, we believe that pizza is not just food, but an experience that should be savored with every bite. That's why we use only the freshest ingredients in our pizzas, from the dough to the toppings, to ensure that you get the best taste and quality every time you visit us.
        </p>
      </div>
    </section>
    </>
  );
}

export default Home;
