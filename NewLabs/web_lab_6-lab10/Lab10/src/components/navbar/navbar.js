import "./navbar.css";
import logo from "../../images/logo3.jpg";

export default function NavBar() {
  return (
    <nav className="nav-block">
      <a href="/home">
        <img src={logo} className="img_logo" alt="logo" />
      </a>
      <ul className="nav-elements">
        <li>
          <a href="/home" className="nav-home">
            Home
          </a>
        </li>
        <li>
          <a href="/catalog" className="nav-catalog">
            Catalog
          </a>
        </li>
        <li>
          <a href="/cart" className="nav-cart">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
}
