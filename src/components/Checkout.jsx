import { useContext } from "react";
import Input from "./UI/Input.jsx";
import Modal from "./UI/Modal.jsx";
import currencyFormatter from "../utils/currencyFormatter.js";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Button from "./UI/Button.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }
  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" name="name" />
        <Input label="Email Address" type="email" id="email" name="email" />
        <Input label="Street" type="text" id="street" name="street" />
        <div className="control-row">
          <Input
            label="Postal code"
            type="text"
            id="postal-code"
            name="postal-code"
          />
          <Input label="City" type="text" id="city" name="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
