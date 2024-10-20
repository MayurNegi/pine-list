import { useCallback, useState } from 'react';
import { CustomerDetails } from './components/CustomerDetails';
import { CustomerList } from './components/CustomerList';
import './index.css';
import { Customer } from './services/types';

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const handleCustomerClick = useCallback((customer: Customer) => {
    setSelectedCustomer(customer);
  }, []);

  return (
    <div className="app-container">
      <div className="customer-list-container">
        <CustomerList
          handleCustomerClick={handleCustomerClick}
          selectedCustomer={selectedCustomer}
        />
      </div>
      <div className="customer-details-container">
        <CustomerDetails selectedCustomer={selectedCustomer} />
      </div>
    </div>
  );
}

export default App;
