import { useEffect, useRef, useState } from 'react';
import { CustomerCard } from '../CustomerCard';
import { Virtuoso } from 'react-virtuoso';
import { Api } from '../../services/Api';
import { Customer } from '../../services/types';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';

const PAGE_LIMIT = 30;

export const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pageNumRef = useRef(1);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const newCustomers = await Api.fetchCustomersList({
        pageNo: pageNumRef.current,
        limit: PAGE_LIMIT,
      });
      setCustomers((prevCustomers) => [...prevCustomers, ...newCustomers]);
      setError(null);
    } catch (error) {
      setError('Failed to load customers. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const loadMore = async () => {
    pageNumRef.current += 1;
    fetchCustomers();
  };

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
