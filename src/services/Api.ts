import { Customer } from './types';

export const Api = {
  fetchCustomersList: ({
    pageNo,
    limit,
  }: {
    pageNo: number;
    limit: number;
  }): Promise<Customer[]> => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users?page=${pageNo}&_limit=${limit}`
    ).then((data) => data.json());
  },
};
