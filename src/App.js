import React, { useEffect, useState } from "react";
import './App.scss'
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";


function App() {
  const [products, setProducts] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
 
  useEffect(() => {
    fetch('https://64306a06b289b1dec4c7f3e7.mockapi.io/Products')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProducts(json)
      });
    }, []);

    let  onAddToCart = function(obj){
      setCartItems([...cartItems, obj])
    }
    console.log(cartItems)
  return (
    <div>
      <div className="CartShadow hidden"></div>

      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)}/>}
        <div className="container">

       
          <div className="wrapper">
            
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="pad">
              <div className="main-top">
                <h1 className="title">Все кроссовки</h1>
                <Search/>
              </div>
              <div className="cards-wrapper">
                {products.map((product)=> (
                  <Card
                  productPicture={product.picture}
                  productName={product.name}
                  productPrice={product.price}
                  onClickFavorite={() => console.log('добавлено в избранное')}
                  onClickAdd={(obj) => onAddToCart(obj)}
                  />
                ))}
              </div>
            </div>
        </div> 
      </div>
  </div> 
  );
}

export default App;
