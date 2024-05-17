import "./cart-block.css";
import { MdOutlineShoppingCart } from "react-icons/md";

export function CartBlock() {
  return (
    <div className="cart-block">
      <MdOutlineShoppingCart size={32} className="cart-block__icon" />
      <span className="cart-block__total-price">2323</span>
    </div>
  );
}
