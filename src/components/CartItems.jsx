import currencyFormatter from "../utils/currencyFormatter";

export default function CartItems({
  item,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li>
      <p>
        {item} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
