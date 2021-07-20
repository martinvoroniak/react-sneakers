import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fethData() {
      try {
        const cartResponse = await axios.get('https://60d382a561160900173c9403.mockapi.io/cart');
        const favoritesResponse = await axios.get(
          'https://60d382a561160900173c9403.mockapi.io/favorites',
        );
        const itemsResponse = await axios.get('https://60d382a561160900173c9403.mockapi.io/items');

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Не можу отримати дані з сервера ...');
        console.error(error);
      }
    }
    fethData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = favorites.find((item) => Number(item.perentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.perentId) !== Number(obj.id)));
        await axios.delete(`https://60d382a561160900173c9403.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://60d382a561160900173c9403.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.perentId === data.perentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Упс... Не зміг добавити в корзину :(');
      console.error(error);
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        await axios.delete(`https://60d382a561160900173c9403.mockapi.io/favorites/${obj.id}`);
      } else {
        setFavorites((prev) => [...prev, data]);
        const { data } = await axios.post(
          'https://60d382a561160900173c9403.mockapi.io/favorites',
          obj,
        );
      }
    } catch (error) {
      alert('не зміг добавити в закладки');
      console.error(error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      await axios.delete(`https://60d382a561160900173c9403.mockapi.io/cart/${id}`);
    } catch (error) {
      alert('Не зміг видалити з корзини...');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.perentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorites,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            clearSearchValue={clearSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorites={onAddToFavorites}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites">
          <Favorites />
        </Route>

        <Route path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
