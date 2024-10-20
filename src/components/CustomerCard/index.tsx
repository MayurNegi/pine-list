import { memo } from 'react';
import { Customer } from '../../services/types';
import './styles.css';

export const CARD_HEIGHT = 105;

export const CustomerCard = memo(
  ({
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

    console.log('customer Card');

    const isSelected = selectedCustomer?.id === customer.id;

    return (
      <div
        style={{ height: CARD_HEIGHT }}
        onClick={() => handleCustomerClick(customer)}
        className={`customer-card ${isSelected && 'selected'}`}
      >
        <h2 className="customer-name">{name}</h2>
        <p className="customer-title">{title}</p>
      </div>
    );
  }
);
