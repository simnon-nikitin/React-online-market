import './Search.scss';

function Search({ setSearchValue }) {
  const onInput = (evt) => {
    setSearchValue(evt.target.value);
  };
  return (
    <div className="search">
      <img className="search__img" src="/img/search.svg" width={14} height={14} alt="search" />
      <input onChange={onInput} className="search__input" type="search" placeholder="Поиск..." />
    </div>
  );
}

export default Search;
