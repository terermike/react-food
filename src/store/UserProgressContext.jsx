import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, showUserProgress] = useState("");

  function showCart() {
    showUserProgress("cart");
  }
  function hideCart() {
    showUserProgress("");
  }
  function showCheckout() {
    showUserProgress("checkout");
  }
  function hideCheckout() {
    showUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    hideCart,
    showCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
