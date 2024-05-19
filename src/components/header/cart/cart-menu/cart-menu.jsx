import { ButtonToBuy } from "../../../button";
import { calcTotalPrice } from "../../utils";
import { CartItem } from "../cart-item";
import "./cart-menu.css";

export function CartMenu({ items, onClick }) {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => <CartItem key={game.id} game={game} />)
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <ButtonToBuy type="secondary" size="m" onClick={onClick}>
            Оформить заказ
          </ButtonToBuy>
        </div>
      ) : null}
    </div>
  );
}
