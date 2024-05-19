import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function About() {
  return (
   <section className="contact" id="contact">
  <div className="contact-info1">
    <ul className="phon">
      <li>
        <h3>
          {" "}
          <i
            className="fa fa-phone"
            style={{ fontSize: 20, color: "gold", paddingRight: 10 }}
          />
          000 (123) 456 7890
        </h3>
        <p>A small river named Duden flows</p>
      </li>
      <li>
        <h3>
          <i
            className="fa fa-map-marker"
            style={{ fontSize: 20, color: "gold", paddingRight: 10 }}
          />
          198 West 21th Street
        </h3>
        <p>Suite 721 New York NY 10016</p>
      </li>
      <li>
        <h3>
          <i
            className="fas fa-clock"
            style={{ fontSize: 20, color: "gold", paddingRight: 10 }}
          />
          Open Monday-Friday
        </h3>
        <p>8:00am - 9:00pm</p>
      </li>
    </ul>
  </div>
  <div className="contact-info2">
    <ul className="social-icon">
      <li className="social-animate">
        <a href="https://twitter.com/AmeenOsama5">
          <i className="fa-brands fa-twitter" />
        </a>
      </li>
      <li className="social-animate">
        <a href="https://www.facebook.com/hema.elhadad.9/">
          <i className="fa-brands fa-facebook-f" />
        </a>
      </li>
      <li className="social-animate">
        <a href="https://www.instagram.com/3bdlhmyd9316/">
          <i className="fa-brands fa-instagram" />
        </a>
      </li>
    </ul>
  </div>
</section>

  );
}

export default About;
