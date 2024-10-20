import { Customer, CustomerImage } from './types';

export const Api = {
  fetchCustomersList: ({
    pageNo,
    limit,
  }: {
    pageNo: number;
    limit: number;
  }): Promise<Customer[]> => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users?page=${pageNo}&limit=${limit}`
    ).then((data) => data.json());
  },

  fetchCustomerImages: ({
    pageNo,
    limit,
  }: {
    pageNo: number;
    limit: number;
  }): Promise<CustomerImage[]> => {
    return fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=${limit}`
    ).then((data) => data.json());
  },
};
