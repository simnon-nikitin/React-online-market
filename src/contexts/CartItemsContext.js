import { useState, createContext, useMemo } from 'react';

export const CartItemsContext = createContext();

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [isOrderSend, setIsOrderSend] = useState(false);
  const [sum, setSum] = useState(0);

  const memoValue = useMemo(
    () => ({
      cartItems,
      setCartItems,
      isCartLoaded,
      setIsCartLoaded,
      sum,
      setSum,
      isOrderSend,
      setIsOrderSend,
    }),
    [cartItems, isCartLoaded, isOrderSend, sum]
  );

  return <CartItemsContext.Provider value={memoValue}>{children}</CartItemsContext.Provider>;
};
