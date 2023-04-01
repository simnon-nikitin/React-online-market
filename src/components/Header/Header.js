import React, { useState } from "react";
import './Header.sass'
   
function Header() {

  const state = useState(0)
    
  return (
    <div className="wrapper">

      <header className="header">

        <div className="header-left">
          <a href="#"><img className="header__logo" src="/img/logo.png"/></a>
          <h1 className="header__title">REACT SNEAKERS</h1>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>

        <ul>

          <li>
            <img width={18} height={18} src="/img/cart.svg"></img>
            <span className="header__sum">0 руб.</span>
          </li>

          <li>
            <img width={18} height={18} src="/img/heart.svg"></img>
          </li>

          <li>
            <a href="#"><img width={18} height={18} src="/img/user.svg"></img></a>
          </li>

        </ul>

      </header>
    </div>
  );
}

export default Header;