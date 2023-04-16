import React, { useState } from "react";
import {Link} from "react-router-dom";   
import Card from "../components/Card/Card";
function Home({products, searchValue, onAddToCart, onInput}) {

  return (
    <div className="pad">  
        <div className="main-top">
            <h1 className="title">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки' }</h1>
            <div className="search--block">
                <img className="search__img" src="/img/search.svg" width={14} height={14} alt="search"></img>
                <input onChange={onInput} className="search__input" type="search" placeholder="Поиск..."></input>
            </div>
        </div>

        <div className="cards-wrapper">
            {products.filter((product) => product.name.toLowerCase().includes(searchValue))
            .map((product, key)=> (
            <Card
                key={key}
                productId={product.id}
                productPicture={product.picture}
                productName={product.name}
                productPrice={product.price}
                productInCart={product.isInCart}
                onClickFavorite={() => console.log('добавлено в избранное')}
                onClickAdd={(obj) => onAddToCart(obj)}
                inCart={product.isInCart}
            />
            ))}
        </div>
    </div>
  );
}

export default Home;