import React, { useState } from "react";
import './App.scss'
import Header from "./components/Header/Header";
import Cart from "./components/CartMenu/Cart";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
function App() {

  const state = useState(0)
    
  return (
    <div>
      <div className="CartShadow hidden"></div>
        <div className="container">
        {/* <Cart/> */}
          <div className="wrapper">
            
            <Header/>
            <div className="pad">
              <div className="main-top">
                <h1 className="title">Все кроссовки</h1>
                <Search/>
              </div>
              <div className="cards-wrapper">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
        </div> 
      </div>
  </div> 
  );
}

export default App;
