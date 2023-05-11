import { useState, createContext, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpened, setCartOpened] = useState(false);

  const memoValue = useMemo(
    () => ({
      cartOpened,
      setCartOpened,
    }),
    [cartOpened]
  );

  return <CartContext.Provider value={memoValue}>{children}</CartContext.Provider>;
};
