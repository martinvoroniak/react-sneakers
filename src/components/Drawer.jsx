import React from 'react';

function Drawer({ items, onRemove, onClose }) {
  const [isOrderComplite, setOrderIsComplite] = React.useState(false);

  const onClickOrder = () => {
    setOrderIsComplite(true);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img onClick={onClose} src="/img/btn-remove.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div className="drawerItemsBlock">
            <div className="items">
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
                  <b>4650 грн.</b>
                </li>
                <li>
                  <span>Податок 20%:</span>
                  <div></div>
                  <b>930 грн.</b>
                </li>
                <button onClick={onClickOrder} className="greenButton">
                  Створити замовллення?
                  <img src="/img/arrow.svg" alt="Arrow" />
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <div className="cartEmpty">
            <img width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Корзина пуста</h2>
            <p>Добавте хоча б одну пару кросовок, щоб створити замовлення</p>
            <button className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Повернутись назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
