import { useContext, useEffect } from 'react';
import './Cart.scss';
import OrderButton from '../OrderButton/OrderButton';
import GoBackButton from '../GoBackButton/GoBackButton';
import { CartContext } from '../../contexts/CartContext';
import { CartItemsContext } from '../../contexts/CartItemsContext';
import { deleteItemFromCart, getCartItems } from '../../api/api';

function Cart() {
  // const [state, dispatch] = useReducer();
  // console.log(state, dispatch);
  const { cartOpened, setCartOpened } = useContext(CartContext);
  const { setCartItems, setIsCartLoaded, cartItems, sum, setSum, isOrderSend } =
    useContext(CartItemsContext);
  const isCartFull = cartItems.length > 0;
  const handleClose = () => {
    setCartOpened(false);
  };
  useEffect(() => {
    getCartItems().then(({ data }) => {
      setCartItems(data);
      setIsCartLoaded(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onRemoveItemFromCart = (obj) => {
    deleteItemFromCart(obj.id);
    setSum((prev) => prev - obj.price);
    setCartItems((prev) => prev.filter((product) => product.id !== obj.id));
  };
  return (
    <div>
      {cartOpened && (
        <div>
          <div className="shadow " />
          <div className="cart-contanier">
            <div className="cart-wrapper">
              <div className="cartTop">
                <h2 className="cart__title">Корзина</h2>
                <button onClick={handleClose} type="button">
                  <img
                    className="close--btn"
                    width={32}
                    height={32}
                    src="/img/delete-btn.svg"
                    alt="close cart"
                  />
                </button>
              </div>

              {isCartFull && (
                <div>
                  <ul className="cart__items">
                    {cartItems.map((obj, i) => (
                      <li className="item" key={i}>
                        <img
                          className="item__picture"
                          src={obj.picture}
                          width={70}
                          height={70}
                          alt="product"
                        />
                        <div className="item__text">
                          <p className="item__name">{obj.name}</p>
                          <p className="item__price">{obj.price} руб.</p>
                        </div>
                        <button onClick={() => onRemoveItemFromCart(obj)} type="button">
                          <img
                            className="delete--btn"
                            width={32}
                            height={32}
                            src="/img/delete-btn.svg"
                            alt="remove item"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="cartBottom">
                    <div className="sum">
                      <span>Итого:</span>
                      <div className="line" />
                      <span className="amount">{sum} руб.</span>
                    </div>

                    <div className="discount">
                      <span>Скидка%</span>
                      <div className="line" />
                      <span className="percent">0 руб.</span>
                    </div>

                    <OrderButton />
                  </div>
                </div>
              )}
              {!isCartFull && !isOrderSend && (
                <div className="cart--empty">
                  <img width={120} height={120} src="/img/empty-cart.png" alt="empty box" />
                  <h3 className="cart__title">Корзина пустая</h3>
                  <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                  <GoBackButton />
                </div>
              )}
              {!isCartFull && isOrderSend && (
                <div className="cart--ready">
                  <img src="/img/order-ready.png" width={83} height={120} alt="ready" />
                  <h2 className="cart__title">Заказ оформлен!</h2>
                  <p>Ваш заказ скоро будет передан курьерской доставке</p>
                  <GoBackButton />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
