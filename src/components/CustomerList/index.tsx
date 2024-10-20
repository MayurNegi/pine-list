import { useEffect, useRef, useState } from 'react';
import { CustomerCard } from '../CustomerCard';
import { Virtuoso } from 'react-virtuoso';
import { Api } from '../../services/Api';
import { Customer } from '../../services/types';

const PAGE_LIMIT = 30;

export const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pageNumRef = useRef(1);

  const fetchCustomers = async () => {
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
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Loading...
      </div>
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
