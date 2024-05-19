import "./cart-item.css";

export function CartItem({ game }) {
  return (
    <div className="cart-item">
      <span className="cart-item__nametag">{game.title}</span>
      <div className="cart-item__price">
        <span>{game.price} руб.</span>
      </div>
    </div>
  );
}
