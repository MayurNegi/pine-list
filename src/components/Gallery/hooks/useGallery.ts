import { useEffect, useState } from 'react';
import { Customer, CustomerImage } from '../../../services/types';
import { Api } from '../../../services/Api';
import { getRandomNumber } from '../../../utils';

const PAGE_LIMIT = 9;
const TIME_INTERVAL = 10000;

export const useGallery = (selectedCustomer: Customer) => {
  const [images, setImages] = useState<CustomerImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        // get a random number between 1 and 100 to show update new images.
        const pageNo = getRandomNumber(1, 100);
        const response = await Api.fetchCustomerImages({
          pageNo,
          limit: PAGE_LIMIT,
        });
        setImages(response);
      } catch (error) {
        setError('Failed to load images.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    const interval = setInterval(fetchImages, TIME_INTERVAL);

    return () => {
      clearInterval(interval);
      setImages([]);
    };
    // Passing selectedCustomer as a dependency so that it runs the cleanup
    // function every time the selected customer changes and we get new images.
  }, [selectedCustomer]);

  return {
    images,
    loading,
    error,
  };
};
