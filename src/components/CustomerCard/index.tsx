import { Customer } from '../../services/types';
import './styles.css';

export const CustomerCard = ({ customer }: { customer: Customer }) => {
  const { name, address } = customer;
  const title = `${address.city} ${address.street} ${address.suite} ${address.zipcode}`;

  return (
    <div className="customer-card">
      <h2 className="customer-name">{name}</h2>
      <p className="customer-title">{title}</p>
    </div>
  );
};
