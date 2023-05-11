import './order.scss';
import OrderItem from './OrderItem/OrderItem';

const Order = ({ order }) => {
  const renderOrderItems = () => {
    return order.items.map((item, key) => <OrderItem key={key} item={item} />);
  };
  return (
    <div className="order">
      <div className="orderTop">
        <p className="order__number">Заказ №{order.id}</p>
        <p className="order__date">{order.date}</p>
        <p className="order__status">Статус: обрабатывается</p>
      </div>
      <ul className="order__list">{renderOrderItems()}</ul>
      <p className="order__sum">Итого: {order.totalAmount} руб.</p>
    </div>
  );
};

export default Order;
