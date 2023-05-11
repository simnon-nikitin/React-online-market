import { useContext } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { CartItemsContext } from '../../contexts/CartItemsContext';

const Header = () => {
  const { setCartOpened } = useContext(CartContext);
  const handleOpen = () => {
    setCartOpened(true);
  };
  const { sum } = useContext(CartItemsContext);
  return (
    <header className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header__logo" width={40} height={40} src="/img/logo.png" alt="logo" />
        </Link>
        <div className="headerLeft__txt">
          <h1 className="header__title">REACT SNEAKERS</h1>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="headerRight">
        <li className="cart">
          <button type="button" onClick={handleOpen}>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span className="header__counter">{sum} руб.</span>
          </button>
        </li>

        <li className="heart">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="favorite" />
          </Link>
        </li>

        <li className="user">
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt="account" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
