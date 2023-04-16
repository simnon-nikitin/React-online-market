import React from "react";
import './Header.scss'
import {Link} from "react-router-dom";   
function Header({ onClickCart }) {

  return (
      <header className="header">
        
        
        <div className="header-left">
          <Link to="/">
          <img className="header__logo" width={40} height={40} src="/img/logo.png" alt="logo"/>
          </Link>
          <div className="header-left-titles">
            <h1 className="header__title">REACT SNEAKERS</h1>
            <p className="header__subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>
        

        <ul className="header-right">

          <li className="cart" onClick={onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="cart"></img>
            <span className="header__sum">0 руб.</span>
          </li>

          <li className="heart">
            <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="favorite"></img>
            </Link>
          </li>

          <li className="user">
            <a href="#"><img width={18} height={18} src="/img/user.svg" alt="account"></img></a>
          </li>

        </ul>

      </header>
    
  );
}

export default Header;