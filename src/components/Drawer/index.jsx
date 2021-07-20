import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplite, setIsOrderComplite] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://60d382a561160900173c9403.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplite(true);
      setCartItems([]);
      // loop for to clear the recycle bin, the put method does not work, mockapi has no replay
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60d382a561160900173c9403.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Виникла помилка при створенні замовлення :(');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img onClick={onClose} src="/img/btn-remove.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div className={styles.drawerItemsBlock}>
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img className="imgCart" width={70} height={70} src={obj.imgUrl} alt="Sneakers" />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li>
                  <span>Загальна ціна:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Податок 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} грн.</b>
                </li>
                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                  Створити замовллення?
                  <img src="/img/arrow.svg" alt="Arrow" />
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplite ? 'Замовлення створено' : 'Корзина пуста'}
            description={
              isOrderComplite
                ? `Ваше замовлення #${orderId} очікує на курєра`
                : 'Добавте хоча б одну пару кросовок, щоб створити замовлення.'
            }
            image={isOrderComplite ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
