import React, { useState } from "react";
import './Cart.scss'
import Button from "../Button/Button";
   
function Cart() {

  const state = useState(0)
    
  return (
    
    <div className="Mainbox">
       
        <div className="cart-wrapper">
            <div className="cart-top">
                <h2 className="cart__title">Корзина</h2> 
                <img className="close-btn" width={32} height={32} src="/img/delete-btn.svg"></img>
            </div>
            
            <template>
                <li className="item">
                    <img className="item__sneakersImg" src="#" width={70} height={70}></img>
                    <div className="text">
                        <p className="item-name">Model name</p>
                        <p className="item-price">Model price руб.</p>  
                    </div>
                    <img className="delete-btn" width={32} height={32} src="/img/delete-btn.svg"></img>
                </li>
            </template>


            <ul className="Cart-items">

            <li className="Cart__item">
                    <img className="item__sneakersImg" src="/img/Sneakers/2.jpg" width={70} height={70}></img>
                    <div className="text">
                        <p className="item-name">Мужские Кроссовки Nike Air Max 270</p>
                        <p className="item-price">12 999 руб.</p>
                    </div>
                  <img className="delete-btn" width={32} height={32} src="/img/delete-btn.svg"></img>
                </li>

                <li className="Cart__item">
                    <img className="item__sneakersImg" src="/img/Sneakers/2.jpg" width={70} height={70}></img>
                    <div className="text">
                        <p className="item-name">Мужские Кроссовки Nike Air Max 270</p>
                        <p className="item-price">12 999 руб.</p>
                    </div>
                  <img className="delete-btn" width={32} height={32} src="/img/delete-btn.svg"></img>
                </li>
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