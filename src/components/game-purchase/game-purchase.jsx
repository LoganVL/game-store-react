import { ButtonToBuy } from "../button";
import "./game-purchase.css";

export function GamePurchase({ game }) {
  return (
    <div className="game-purchase">
      <span className="game-purchase__price">{game.price} руб.</span>
      <ButtonToBuy onClick={() => null} type="secondary" size="m">
        В корзину
      </ButtonToBuy>
    </div>
  );
}
