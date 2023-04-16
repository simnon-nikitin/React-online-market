import React from "react";
import './Cart.scss'
import OrderButton from "../OrderButton/OrderButton";
import GoBackButton from "../GoBackButton/GoBackButton";

function Cart({items = [], onClose, onRemove}) {
    
  return (
    <div>
        <div className="CartShadow "></div>
            <div className="cartBox"> 
    
                <div className="cart-wrapper">


                <div className="cart-top">
                    <h2 className="cart__title">Корзина</h2> 
                    <img onClick={onClose} className="close-btn" width={32} height={32} src="/img/delete-btn.svg" alt="close cart"></img>
                </div>

                {items.length > 0 ? 
                <div>
                <ul className="Cart-items">
                {items.map((obj, i) => (
                        <li className="item" key={i}>
                            <img className="item__picture" src={obj.productPicture} width={70} height={70} alt="product"></img>
                            <div className="text">
                                <p className="item-name">{obj.productName}</p>
                                <p className="item-price">{obj.productPrice} руб.</p>
                            </div>
                            <img onClick={() => onRemove(obj)} className="delete-btn" width={32} height={32} src="/img/delete-btn.svg" alt="remove item"></img>
                        </li>    ))}
                    </ul>
                
                    <div className="cart-bottom">

                        <div className="sum">
                            <span>Итого:</span>
                            <div className="line"></div>
                            <span className="amount">0 руб.</span>
                        </div>

                        <div className="discount">
                            <span>Скидка%</span>
                            <div className="line"></div>
                            <span className="percent">0 руб.</span>
                        </div>

                        <OrderButton/>
                    </div>
                </div>
                    :
                <div className="cart-empty">
                    <img width={120} height={120}  src="/img/empty-cart.png" alt="empty box"></img>
                    <h3 className="cart-empty__title">Корзина пустая</h3>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <GoBackButton/>      
                </div>
                }
            </div>
        </div>
    </div>
  );
}

export default Cart;