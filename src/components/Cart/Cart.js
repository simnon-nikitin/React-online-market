import React, { useState } from "react";
import './Cart.scss'
import Button from "../Button/Button";
   
function Cart({items = [], onClose}) {

  const state = useState(0)
    
  return (
    
    <div className="cartBox"> 
        <div className="cart-wrapper">


            <div className="cart-top">
                <h2 className="cart__title">Корзина</h2> 
                <img onClick={onClose} className="close-btn" width={32} height={32} src="/img/delete-btn.svg"></img>
            </div>


            <ul className="Cart-items">
            {items.map((obj) => (
                <li className="item">
                    <img className="item__picture" src={obj.productPicture} width={70} height={70}></img>
                    <div className="text">
                        <p className="item-name">{obj.productName}</p>
                        <p className="item-price">{obj.productPrice} руб.</p>
                    </div>
                    <img className="delete-btn" width={32} height={32} src="/img/delete-btn.svg"></img>
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

                <Button/>

            </div>

            
        </div>
    </div>
    
  );
}

export default Cart;