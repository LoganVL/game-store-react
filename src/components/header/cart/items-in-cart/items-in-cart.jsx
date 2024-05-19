import "./items-in-cart.css";

export function ItemsInCart({ quantity }) {
  return quantity > 0 ? <div className="items-in-cart">{quantity}</div> : null;
}
