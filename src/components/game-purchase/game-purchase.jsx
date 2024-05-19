import { ButtonToBuy } from "../button";
import { useDispatch, useSelector } from "react-redux";
import "./game-purchase.css";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

export function GamePurchase({ game }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-purchase">
      <span className="game-purchase__price">{game.price} руб.</span>
      <ButtonToBuy
        onClick={handleClick}
        type={isItemInCart ? "primary" : "secondary"}
        size="m"
      >
        {isItemInCart ? "Убрать из корзины" : "В корзину"}
      </ButtonToBuy>
    </div>
  );
}
