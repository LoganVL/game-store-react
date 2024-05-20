import { useSelector } from "react-redux";
import "./order-page.css";
import { calcTotalPrice } from "../../components/header/utils";
import { declensions } from "./declensions";
import { OrderItem } from "../../components/order-item";

export function OrderPage() {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page__container">
        {items.map((game) => (
          <OrderItem game={game} key={game} />
        ))}
      </div>
      <div className="order-page__total-price">
        <span>
          {declensions(items)} на сумму {calcTotalPrice(items)}
        </span>
      </div>
    </div>
  );
}
