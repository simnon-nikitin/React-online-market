import React, { useState } from "react";
import './Search.scss'

   
function Search() {

  const state = useState(0)
    
  return (
    
    <div className="search--block">
        <img className="search__img" src="/img/search.svg" width={14} height={14}></img>
        <input className="search__input" type="search" placeholder="Поиск..."></input>
    </div>
    
  );
}

export default Search;