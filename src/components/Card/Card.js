import React, { useState } from "react";
import './Card.scss'
import CartLoader from "./CartLoader";


function Card({productId, productInCart, productPicture, productName, productPrice, onClickAdd, loading}) {

    const [isAdded, setIsAdded] = useState(productInCart)
    const [isFavorite, setIsFavorite] = useState(false)

    const addToCart = () => {
        if (isAdded) {
            onClickAdd({productPicture, productName, productPrice, id: productId})
        } else {
            onClickAdd({productPicture, productName, productPrice, id: productId})
        }

        
        
        setIsAdded(!isAdded);
    }
    const addToFavorite = () => {
        setIsFavorite(!isFavorite);
     }

  return (
    
    <div className="card">
        <div className="card--wrapper">
            
            {loading ? <CartLoader/> : 

            <>
                <div className="card__image--favorite">
                    <img className="card__image" width={133} height={112} src={productPicture} alt="product image"></img>
                    <button onClick={addToFavorite}>
                        <img className="favorite--btn" width={32} height={32} src={isFavorite ? "/img/Favorite--field.svg" :"/img/Favorite--empty.svg"} alt="mark as favorite"></img>
                    </button>
                </div>
                <p className="card__name">{productName}</p>
                <div className="cardBottom">
                    <div>
                        <p className="card__price-title">Цена:</p>
                        <p className="card__price">{productPrice} руб.</p>
                    </div>
                    <button onClick={addToCart}>
                        <img className="add-btn" width={32} height={32} src={isAdded ? "/img/added-btn.svg" : "/img/add-btn.svg"} alt="add"></img>
                    </button>
                </div>
            </>
        }
        </div>
    </div>
    
  );
}

export default Card;