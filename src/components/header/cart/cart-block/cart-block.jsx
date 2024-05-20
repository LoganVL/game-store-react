import "./cart-block.css";
import { CartMenu } from "../cart-menu";
import { useSelector } from "react-redux";
import { ItemsInCart } from "../items-in-cart";
import { MdOutlineShoppingCart } from "react-icons/md";
import { calcTotalPrice } from "../../utils";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <MdOutlineShoppingCart
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible((vision) => !vision)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price"> {totalPrice} </span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
}
