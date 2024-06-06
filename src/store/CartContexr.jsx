import { Children, createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export function CartContextpProvider() {
  return <CartContext.Provider>{Children}</CartContext.Provider>;
}
export default CartContext;
