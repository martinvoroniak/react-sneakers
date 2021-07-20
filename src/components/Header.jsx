import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={50} height={50} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>React sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>{totalPrice} грн</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt="Користувач" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
