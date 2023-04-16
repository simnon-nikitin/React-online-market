import React, { useEffect, useState } from "react";


import './variables.scss'
import './App.scss'

import { getCartItems, getProducts, addItemToCart, deleteItemFromCart } from './Api/Api'
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

import { Route, Routes } from "react-router-dom";



function App() {
  const [products, setProducts] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  

  const onInput = (evt) => {
    setSearchValue(evt.target.value)
  }

  useEffect(() => {
    getCartItems()
      .then(data => {
        setCartItems(data);
        setIsCartLoaded(true);
      });
    }, []);

  useEffect(() => {
    if (isCartLoaded) {
      getProducts()
      .then(data => {
        if (cartItems.length > 0) {
          const productsClone = [ ...data ];
          const cartItemsClone = [ ...cartItems ];
          const cartItemsIds = cartItemsClone.map(cartItem => cartItem.id)

          productsClone.map((product) => {
            if (cartItemsIds.includes(product.id)) {
              product.isInCart = true
            }

            return product;
          });
          
          setProducts(productsClone)
        } else {
          setProducts(data)
        }
      });
    }
  }, [isCartLoaded]);


  let onAddToCart = function(obj){
    if(cartItems.find((item) => item.id === obj.id)) {
      setCartItems(prev => prev.filter(item => item.id !== obj.id))
      deleteItemFromCart(obj)
    } else {
      addItemToCart(obj)
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveProduct = (obj) => {
    deleteItemFromCart(obj)
    setCartItems((prev) => prev.filter(product => product.id !==obj.id));
  };

  return (
    <div>
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveProduct}/>}
        <div className="container">
          <div className="wrapper">
            <Header onClickCart={() => setCartOpened(true)}/>

            <Routes>
              <Route path="/" element={
                <Home 
                  products={products}
                  searchValue={searchValue}
                  onAddToCart={onAddToCart} 
                  onInput={onInput}
                />}
              />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
            
          </div> 
        </div>
    </div> 
  );
}

export default App;
