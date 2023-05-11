import { useEffect, useState } from 'react';
import './orderPage.scss';
import { Link } from 'react-router-dom';
import Order from '../../components/Order/Order';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { getOrders } from '../../api/api';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then(({ data }) => {
      setOrders(data);
    });
  }, []);
  const renderOrders = () => {
    return orders.map((order, key) => <Order key={key} order={order} />);
  };
  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="orders--empty">
          <h1 className="orders__title">У вас пока нет заказов</h1>
          <p>Вы ничего не заказывали</p>
          <Link to="/">
            <GoBackButton />
          </Link>
        </div>
      ) : (
        <div className="orders--fulled">
          <h1 className="orders__title">Мои заказы</h1>
          <div>{renderOrders()}</div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
