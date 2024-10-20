import { useState } from 'react';
import { CustomerDetails } from './components/CustomerDetails';
import { CustomerList } from './components/CustomerList';
import './index.css';

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="app-container">
      <div className="customer-list-container">
        <CustomerList />
      </div>
      <div className="customer-details-container">
        <CustomerDetails />
      </div>
    </div>
  );
}

export default App;
