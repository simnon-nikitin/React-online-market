import { useState, createContext, useMemo } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritesItems, setFavoritesItems] = useState([]);
  const [isfavoritesLoaded, setIsFavoritesLoaded] = useState(false);
  const memoValue = useMemo(
    () => ({
      favoritesItems,
      setFavoritesItems,
      isfavoritesLoaded,
      setIsFavoritesLoaded,
    }),
    [favoritesItems, isfavoritesLoaded]
  );

  return <FavoritesContext.Provider value={memoValue}>{children}</FavoritesContext.Provider>;
};
