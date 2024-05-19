import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Abo-Eldaha Pizza</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/Services">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to= "/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About-us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
