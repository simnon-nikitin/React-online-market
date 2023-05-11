import { useState, useContext, useEffect } from 'react';
import './Card.scss';
import {
  addItemToCart,
  deleteItemFromCart,
  addItemToFavorites,
  deleteItemFromFavorites,
} from '../../api/api';
import { CartItemsContext } from '../../contexts/CartItemsContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const Card = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { setCartItems, cartItems, setSum } = useContext(CartItemsContext);
  const { setFavoritesItems, favoritesItems } = useContext(FavoritesContext);

  const handleCardClick = () => {
    if (isAdded) {
      deleteItemFromCart(product.id);
      setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== product.id));
      setSum((prev) => prev - product.price);
    } else {
      addItemToCart(product);
      setSum((prev) => prev + product.price);
      setCartItems((prev) => [...prev, product]);
    }

    setIsAdded(!isAdded);
  };
  const handleFavorite = () => {
    if (isFavorite) {
      deleteItemFromFavorites(product.id);
      setFavoritesItems((prev) => prev.filter((favoriteItem) => favoriteItem.id !== product.id));
    } else {
      addItemToFavorites(product);
      setFavoritesItems((prev) => [...prev, product]);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const cartItemsIds = cartItems.map((cartItem) => cartItem?.id);
    if (cartItemsIds.includes(product.id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, product.id]);
  useEffect(() => {
    const favoritesItemsIds = favoritesItems.map((favoriteItem) => favoriteItem?.id);
    if (favoritesItemsIds.includes(product.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritesItems, product.id]);
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="cartTop">
          <img
            className="card__image"
            width={133}
            height={112}
            src={product.picture}
            alt="product"
          />
          <button onClick={handleFavorite} type="button">
            <img
              className="favorite--btn"
              width={32}
              height={32}
              src={isFavorite ? '/img/Favorite--field.svg' : '/img/Favorite--empty.svg'}
              alt="mark as favorite"
            />
          </button>
        </div>
        <p className="card__name">{product.name}</p>
        <div className="cardBottom">
          <div>
            <p className="card__price-txt">Цена:</p>
            <p className="card__price">{product.price} руб.</p>
          </div>
          <button onClick={handleCardClick} type="button">
            <img
              className="add--btn"
              width={32}
              height={32}
              src={isAdded ? '/img/added-btn.svg' : '/img/add-btn.svg'}
              alt="add"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
