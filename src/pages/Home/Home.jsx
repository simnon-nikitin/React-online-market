import { useState, useEffect, useContext } from 'react';
import Card from '../../components/Card/Card';
import './home.scss';
import { getProducts } from '../../api/api';
import { CartItemsContext } from '../../contexts/CartItemsContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import CardLoader from '../../components/Card/CardLoader';
import Search from '../../components/Search/Search';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);
  const { isCartLoaded, cartItems } = useContext(CartItemsContext);
  const { favoritesItems } = useContext(FavoritesContext);
  const isLoading = products.length === 0;

  useEffect(() => {
    if (isCartLoaded) {
      getProducts().then(({ data }) => {
        setProducts(data);
      });
    }
  }, [isCartLoaded, cartItems, favoritesItems]);

  const fakeCardsArray = [...Array(12)];

  const renderProducts = () => {
    if (isLoading) {
      return fakeCardsArray.map((item, key) => <CardLoader key={key} />);
    }
    return products
      .filter((product) => product.name.toLowerCase().includes(searchValue))
      .map((product, key) => <Card key={key} product={product} />);
  };

  return (
    <>
      <div className="Home">
        <h1 className="Home__title">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <Search setSearchValue={setSearchValue} />
      </div>

      <div className="cards__wrapper">{renderProducts()}</div>
    </>
  );
}

export default Home;
