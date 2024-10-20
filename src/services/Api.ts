import { CustomerImage, CustomerResponse } from './types';

export const Api = {
  fetchCustomersList: ({
    pageNo,
    limit,
  }: {
    pageNo: number;
    limit: number;
  }): Promise<CustomerResponse> => {
    const skip = (pageNo - 1) * limit;
    return fetch(
      `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
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
