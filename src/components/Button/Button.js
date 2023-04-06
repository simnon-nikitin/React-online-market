import React, { useState } from "react";
import './Button.scss'
   
function Button() {

  const state = useState(0)
    
  return (
    
    <button className="order-btn">
     Оформить заказ <img width={14} height={12} src="/img/Arrow.svg"></img>
    </button>
    
  );
}

export default Button;