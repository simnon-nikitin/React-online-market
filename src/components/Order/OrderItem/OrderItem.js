import './orderItem.scss';

function OrderItem({ item }) {
  return (
    <li className="orderItem">
      <img className="item__picture" src={item.picture} width={70} height={70} alt="" />
      <p className="item__name">{item.name}</p>
      <p className="item__price">{item.price} руб.</p>
    </li>
  );
}

export default OrderItem;
