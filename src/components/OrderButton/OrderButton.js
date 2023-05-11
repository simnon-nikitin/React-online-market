import { useContext } from 'react';
import './OrderButton.scss';
import { CartItemsContext } from '../../contexts/CartItemsContext';
import { sendNewOrder, deleteItemFromCart } from '../../api/api';

function OrderButton() {
  const { setCartItems, cartItems, setSum, setIsOrderSend, sum } = useContext(CartItemsContext);
  const sendOrder = () => {
    sendNewOrder(cartItems, sum);
    const cartItemsIds = cartItems.map((item) => item.id);
    cartItemsIds.forEach((id) => {
      deleteItemFromCart(id);
    });
    setSum(0);
    setCartItems([]);
    setIsOrderSend(true);
  };
  return (
    <button onClick={sendOrder} className="order__btn" type="button">
      Оформить заказ <img width={14} height={12} src="/img/Arrow.svg" alt="arrow" />
    </button>
  );
}

export default OrderButton;
