import React, { useState } from "react";
import './favorites.scss'
// import {Link} from "react-router-dom";   
import GoBackButton from "../components/GoBackButton/GoBackButton";  
function Favorites() {

  return (
    <div className="favorites-contanier">  
        <h1>{'Закладок нет :('}</h1>
        <p>Вы ничего не добавляли в закладки</p>
        <GoBackButton/>
    </div>
  );
}

export default Favorites;