import React, { useState } from "react";
// import '/src/variables.scss'
import './GoBackButton.scss'
   
function GoBackButton() {

  const state = useState(0)
    
  return (
    
    <button className="GoBackButton">
        <img width={14} height={12} src="/img/Arrow2.svg" alt="arrow"></img> 
        Вернуться назад
    </button>
    
  );
}

export default GoBackButton;