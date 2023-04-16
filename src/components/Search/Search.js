import React, { useState } from "react";
import './Search.scss'

   
function Search() {

  const [searchValue, setSearchValue] = useState('');
    
  const onInput = (evt) => {
    console.log()
    setSearchValue(evt.target.value)
  }
  return (
    
    <div className="search--block">
        <img className="search__img" src="/img/search.svg" width={14} height={14}></img>
        <input onChange={onInput} className="search__input" type="search" placeholder="Поиск..."></input>
    </div>
    
  );
}

export default Search;