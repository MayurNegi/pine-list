import { useCallback, useEffect, useRef, useState } from 'react';
import { Customer } from '../../../services/types';
import { Api } from '../../../services/Api';

const PAGE_LIMIT = 15;

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pageNumRef = useRef(1);

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const newCustomers = await Api.fetchCustomersList({
        pageNo: pageNumRef.current,
        limit: PAGE_LIMIT,
      });
      setCustomers((prevCustomers) => [
        ...prevCustomers,
        ...newCustomers.users,
      ]);
      setError(null);
    } catch (error) {
      setError('Failed to load customers. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const loadMore = useCallback(async () => {
    pageNumRef.current += 1;
    fetchCustomers();
  }, [fetchCustomers]);

  return { customers, loading, error, loadMore };
};
