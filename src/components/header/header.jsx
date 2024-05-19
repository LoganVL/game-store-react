import { Link } from "react-router-dom";
import "./header.css";
import { CartBlock } from "./cart/cart-block";

export function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          GameStore
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
}
