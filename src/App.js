import './variables.scss';
import './App.scss';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import OrderPage from './pages/OrderPage/OrderPage';
import Favorites from './pages/Favorites/Favorites';
import { CartProvider } from './contexts/CartContext';
import { CartItemsProvider } from './contexts/CartItemsContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

const App = () => {
  return (
    <CartItemsProvider>
      <CartProvider>
        <FavoritesProvider>
          <Cart />
          <div className="wrapper">
            <Header />
            <div className="pad">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/orders" element={<OrderPage />} />
              </Routes>
            </div>
          </div>
        </FavoritesProvider>
      </CartProvider>
    </CartItemsProvider>
  );
};

export default App;
