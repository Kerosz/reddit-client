import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useDataWithMeta = (url: string) => {
  const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000 });

  return {
    next: data?.data.after,
    previous: data?.data.before,
    result: data?.data.children.map((obj: any) => obj.data),
    isLoading: !data && !error,
    isError: error,
  };
};

export default useDataWithMeta;
