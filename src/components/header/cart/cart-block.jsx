import "./cart-block.css";
import { CartMenu } from "../../cart-menu";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { calcTotalPrice } from "../utils";
import { useState } from "react";

export function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <MdOutlineShoppingCart
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible((vision) => !vision)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price"> {totalPrice} </span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
}
