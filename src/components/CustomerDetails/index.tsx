import { Customer } from '../../services/types';
import { Gallery } from '../Gallery';
import { Loader } from '../Loader';
import './styles.css';

export const CustomerDetails = ({
  selectedCustomer,
}: {
  selectedCustomer: Customer | null;
}) => {
  const { firstName, lastName, address } = selectedCustomer || {};
  const name = `${firstName} ${lastName}`;
  const userAddress = `${address?.address} ${address?.city} ${address?.state} ${address?.postalCode} ${address?.country}`;

  if (!selectedCustomer) return <Loader loading />;

  return (
    <div className="customer-details">
      <div>
        <h2>{name} details here</h2>
        <p>
          This is {name}. He lives at {userAddress}.
        </p>
      </div>
      <Gallery selectedCustomer={selectedCustomer} />
    </div>
  );
};
