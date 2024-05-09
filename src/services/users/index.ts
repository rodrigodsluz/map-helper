import { api } from '@services/api';

export const getUsers = async (url: string) => {
  const response = await api.get(url);

  return response.data;
};
