import { CustomerCard } from '../CustomerCard';
import { Virtuoso } from 'react-virtuoso';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { useCustomers } from './hooks/useCustomers';
import { Customer } from '../../services/types';
import { useEffect } from 'react';

export const CustomerList = ({
  selectedCustomer,
  handleCustomerClick,
}: {
  selectedCustomer: Customer | null;
  handleCustomerClick: (customer: Customer) => void;
}) => {
  const { customers, loading, error, loadMore } = useCustomers();

  // set default customer as first customer
  useEffect(() => {
    if (!selectedCustomer) {
      handleCustomerClick(customers[0]);
    }
  }, [customers, handleCustomerClick, selectedCustomer]);

  const Footer = () => {
    return (
      <>
        <Loader loading={loading} />
        <ErrorMessage error={error} />
      </>
    );
  };

  return (
    <div style={{ height: '100%' }}>
      <Virtuoso
        data={customers}
        totalCount={customers.length}
        itemContent={(index: number) => (
          <CustomerCard
            selectedCustomer={selectedCustomer}
            handleCustomerClick={handleCustomerClick}
            customer={customers[index]}
          />
        )}
        endReached={loadMore}
        components={{ Footer }}
      />
    </div>
  );
};
