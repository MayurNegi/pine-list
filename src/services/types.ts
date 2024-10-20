export interface Customer {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}

export interface CustomerImage {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
