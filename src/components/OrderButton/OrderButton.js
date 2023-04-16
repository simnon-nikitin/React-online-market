import React, { useState } from "react";
import './OrderButton.scss'
   
function OrderButton() {

  const state = useState(0)
    
  return (
    
    <button className="order-btn">
     Оформить заказ <img width={14} height={12} src="/img/Arrow.svg" alt="arrow"></img>
    </button>
    
  );
}

export default OrderButton;