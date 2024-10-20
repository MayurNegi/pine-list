import './styles.css';
import { useGallery } from './hooks/useGallery';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { Customer } from '../../services/types';

export const Gallery = ({
  selectedCustomer,
}: {
  selectedCustomer: Customer;
}) => {
  const { images, loading, error } = useGallery(selectedCustomer);

  if (loading && !images.length) return <Loader loading />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.download_url}
          alt={image.author}
          className="image"
        />
      ))}
    </div>
  );
};
