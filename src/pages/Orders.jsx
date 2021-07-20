import React from 'react';
import axios from 'axios';

import Card from '../components/Card';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://60d382a561160900173c9403.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Щось пішло не так :(');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="search-block">
        <h1>Мої замовлення</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
