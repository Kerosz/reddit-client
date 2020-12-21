import useSWR from 'swr';

export type DataWithComments = {
  next: string | null;
  previous: string | null;
  posts: object[];
  comments: object[];
  isLoading: boolean;
  isError: null | undefined | string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useDataWithComments = (url: string): DataWithComments => {
  const { data, error } = useSWR(url, fetcher, { dedupingInterval: 3000 });

  // TODO: Find a better way of iterating through the comments and return data of only type "t1"
  // .filter((obj: any) => obj.kind === 't1').map(obj => obj.data)
  const comments =
    data && data.data.children.filter((obj: any) => obj.kind === 't1');

  const posts =
    data && data.data.children.filter((obj: any) => obj.kind === 't3');

  return {
    next: data?.data.after,
    previous: data?.data.before,
    posts: posts?.map((obj: any) => obj.data),
    comments: comments?.map((obj: any) => obj.data),
    isLoading: !data && !error,
    isError: error,
  };
};

export default useDataWithComments;
