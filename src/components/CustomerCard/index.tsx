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
  const { firstName, lastName, address } = customer;
  const name = `${firstName} ${lastName}`;
  const title = `${address.address} ${address.city} ${address.state} ${address.postalCode} ${address.country}`;

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
