import { useState, useContext } from 'react';
import './GoBackButton.scss';
import { CartContext } from '../../contexts/CartContext';

function GoBackButton() {
  const { setCartOpened } = useContext(CartContext);
  const handleClose = () => {
    setCartOpened(false);
  };
  const state = useState(0);
  return (
    <button className="GoBackButton" type="button" onClick={handleClose}>
      <img width={14} height={12} src="/img/Arrow2.svg" alt="arrow" />
      Вернуться назад
    </button>
  );
}

export default GoBackButton;
