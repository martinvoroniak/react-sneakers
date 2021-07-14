import React from 'react';
import AppContext from '../context';
import Card from '../components/Card';

function Favorites() {
  const { favorites, onAddToFavorites } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="search-block">
        <h1>Мої закладки</h1>
      </div>

      <div className="sneakers">
        {favorites.map((item) => (
          <Card key={item.id} favorited={true} onFavorite={onAddToFavorites} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
