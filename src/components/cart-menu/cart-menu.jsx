import { ButtonToBuy } from "../button";
import { calcTotalPrice } from "../header/utils";
import "./cart-menu.css";

export function CartMenu({ items, onClick }) {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0 ? items.map((game) => game.title) : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)}</span>
          </div>
          <ButtonToBuy type="secondary" size="m" onClick={onClick}>
            Оформить заказ
          </ButtonToBuy>
        </div>
      ) : null}
    </div>
  );
}
