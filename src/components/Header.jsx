import { useContext } from "react";
import restLogo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  const totalNumberOfCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={restLogo} alt="Restaurant logo" />
        <h1>REACT FOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalNumberOfCartItems})
        </Button>
      </nav>
    </header>
  );
}
