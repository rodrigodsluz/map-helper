import { api } from '@services/api';

export const getPlaces = async (url: string) => {
  const response = await api.get(url);

  return response.data;
};

export const createPlaces = async (body: unknown) => {
  try {
    const response = await api.post('/places', body);
    if (response.status === 201) {
      alert('Place added successfully');

      return response.data;
    }
    throw new Error(response.data.error || 'Something went wrong');
  } catch (error) {
    alert(`Failed to add place: ${error.message}`);
  }

  return null;
};
