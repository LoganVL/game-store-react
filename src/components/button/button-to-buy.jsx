import classNames from "classnames";
import "./button-to-buy.css";

export function ButtonToBuy({ onClick, type, children, size }) {
  const btnClass = classNames({
    // prettier-ignore
    "btn": true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": size === "s",
    "btn--medium": size === "m",
    "btn--xs": size === "xs",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}
