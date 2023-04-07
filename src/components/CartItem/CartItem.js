import React, { useState } from "react";
import './CartItem.scss'

   
function CartItem(props) {

  const state = useState(0)
    
  return (
    
    <li className="item">
        <img className="item__picture" src={props.productPicture} width={70} height={70}></img>
        <div className="text">
            <p className="item-name">{props.productName}</p>
            <p className="item-price">{props.productPrice} руб.</p>
        </div>
        <img className="delete-btn" width={32} height={32} src="/img/delete-btn.svg"></img>
    </li>            
    );
}
                
export default CartItem;