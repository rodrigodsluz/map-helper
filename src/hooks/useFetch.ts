import useSWR from 'swr';

export function useFetch(url: string, getFetcher) {
  const { data, error, isLoading } = useSWR(url, getFetcher);

  return { data, error, isLoading };
}
