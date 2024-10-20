import { Customer } from '../../services/types';
import './styles.css';

export const CustomerCard = ({
  customer,
  selectedCustomer,
  handleCustomerClick,
}: {
  customer: Customer;
  selectedCustomer: Customer | null;
  handleCustomerClick: (customer: Customer) => void;
}) => {
  const { name, address } = customer;
  const title = `${address.city} ${address.street} ${address.suite} ${address.zipcode}`;

  const isSelected = selectedCustomer?.id === customer.id;

  return (
    <div
      onClick={() => handleCustomerClick(customer)}
      className={`customer-card ${isSelected && 'selected'}`}
    >
      <h2 className="customer-name">{name}</h2>
      <p className="customer-title">{title}</p>
    </div>
  );
};
