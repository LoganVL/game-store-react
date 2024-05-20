import { RiDeleteBin2Line } from "react-icons/ri";
import "./cart-item.css";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../../../redux/cart/reducer";

export function CartItem({ game }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className="cart-item">
      <span className="cart-item__nametag">{game.title}</span>
      <div className="cart-item__price">
        <span>{game.price} руб.</span>
        <RiDeleteBin2Line
          size={25}
          className="cart-item__delete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
