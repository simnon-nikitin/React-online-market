import { useEffect, useContext } from 'react';
import './favorites.scss';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { getFavoritesItems } from '../../api/api';
import Card from '../../components/Card/Card';

function Favorites() {
  const { setFavoritesItems, setIsFavoritesLoaded, favoritesItems } = useContext(FavoritesContext);
  const isLoading = favoritesItems.length === 0;
  useEffect(() => {
    getFavoritesItems().then(({ data }) => {
      setFavoritesItems(data);
      setIsFavoritesLoaded(true);
    });
  }, [setFavoritesItems, setIsFavoritesLoaded]);

  const renderFavorites = () => {
    return favoritesItems.map((product, key) => <Card key={key} product={product} />);
  };
  return (
    <div>
      {favoritesItems.length > 0 ? (
        <div className="favorites">
          <h1 className="favorites__title">Мои закладки</h1>
          <div className="cards__wrapper">{renderFavorites()}</div>
        </div>
      ) : (
        <div>
          <div className="favorites--empty">
            <h1 className="favorites__title">Закладок нет</h1>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
              <GoBackButton />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
