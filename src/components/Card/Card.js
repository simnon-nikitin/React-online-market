import React, { useState } from "react";
import './Card.scss'

   
function Card(props) {

    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const addToCart = () => {
       setIsAdded(!isAdded);
    }
    const addToFavorite = () => {
        setIsFavorite(!isFavorite);
     }

  return (
    
    <div className="card">
        <div className="card--wrapper">
            <div className="card__image--favorite">
                <img className="card__image" width={133} height={112} src={props.productPicture}></img>
                <button onClick={addToFavorite}>
                    <img className="favorite--btn" width={32} height={32} src={isFavorite ? "/img/Favorite--field.svg" :"/img/Favorite--empty.svg"}></img>
                </button>
            </div>
            <p className="card__name">{props.productName}</p>
            <div className="cardBottom">
                <div>
                    <p className="card__price-title">Цена:</p>
                    <p className="card__price">{props.productPrice} руб.</p>
                </div>
                <button onClick={addToCart}>
                    <img className="add-btn" width={32} height={32} src={isAdded ? "/img/added-btn.svg" : "/img/add-btn.svg"}></img>
                </button>
            </div>
        </div>
    </div>
    
  );
}

export default Card;