import React from 'react';

import Card from '../components/Card';

function Home({
  items,
  searchValue,
  clearSearchValue,
  onChangeSearchInput,
  onAddToFavorites,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorites(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="search-block">
        <h1>{searchValue ? `Пошук за таким запитом: "${searchValue}"` : 'Всі кросовки'}</h1>
        <div className="search-form">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={clearSearchValue}
              className="clear"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..." />
        </div>
      </div>
      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
