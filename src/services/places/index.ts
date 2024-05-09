import { api } from '@services/api';

export const getPlaces = async (url: string) => {
  const response = await api.get(url);

  return response.data;
};