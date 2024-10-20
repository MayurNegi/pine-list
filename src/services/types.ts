export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  };
}

export interface CustomerResponse {
  users: Customer[];
  total: number;
  skip: number;
  limit: number;
}

export interface CustomerImage {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
