import { CustomerCard } from '../CustomerCard';
import { Virtuoso } from 'react-virtuoso';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { useCustomers } from './hooks/useCustomers';

export const CustomerList = () => {
  const { customers, loading, error, loadMore } = useCustomers();

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
          <CustomerCard customer={customers[index]} />
        )}
        endReached={loadMore}
        components={{ Footer }}
      />
    </div>
  );
};
