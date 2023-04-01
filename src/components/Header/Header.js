import React, { useState } from "react";
import './Header.scss'
   
function Header() {

  const state = useState(0)
    
  return (
    

      <header className="header">

        <div className="header-left">
          <a href="#"><img className="header__logo" width={40} height={40} src="/img/logo.png"/></a>
          <div className="header-left-titles">
            <h1 className="header__title">REACT SNEAKERS</h1>
            <p className="header__subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="header-right">

          <li className="cart">
            <img width={18} height={18} src="/img/cart.svg"></img>
            <span className="header__sum">0 руб.</span>
          </li>

          <li className="heart">
            <img width={18} height={18} src="/img/heart.svg"></img>
          </li>

          <li className="user">
            <a href="#"><img width={18} height={18} src="/img/user.svg"></img></a>
          </li>

        </ul>

      </header>
    
  );
}

export default Header;