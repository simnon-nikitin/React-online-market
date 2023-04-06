import React, { useState } from "react";
import './Card.scss'

   
function Card() {

  const state = useState(0)
    
  return (
    
    <div className="card">
        <div className="card--wrapper">
            <div className="card__image--favorite">
                <img className="card__image" width={133} height={112} src="/img/Sneakers/1.jpg"></img>
                <img className="favorite--btn" width={32} height={32} src="/img/Favorite--empty.svg"></img>
                <img className="favorite--btn hidden" width={32} height={32} src="/img/Favorite--field.svg"></img>
            </div>
            <p className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
                <div>
                    <p className="card__price-title">Цена:</p>
                    <p className="card__price">12 999 руб.</p>
                </div>
                    <img className="add-btn " width={32} height={32} src="/img/add-btn.svg"></img>
                    <img className="added-btn hidden" width={32} height={32} src="/img/added-btn.svg"></img>
            </div>
        </div>
    </div>
    
  );
}

export default Card;