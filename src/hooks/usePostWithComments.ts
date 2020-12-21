import useSWR from 'swr';

export type PostWithComments = {
  post: object;
  comments: object[];
  isLoading: boolean;
  isError: null | undefined | string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePostsWithComments = (url: string): PostWithComments => {
  const { data, error } = useSWR(url, fetcher, { dedupingInterval: 3000 });

  const post = data && data[0]?.data.children[0].data;

  // TODO: Find a better way of iterating through the comments and return data of only type "t1"
  // .filter((obj: any) => obj.kind === 't1').map(obj => obj.data)
  const comments =
    data && data[1]?.data.children.filter((obj: any) => obj.kind === 't1');

  return {
    post,
    comments,
    isLoading: !data && !error,
    isError: error,
  };
};

export default usePostsWithComments;
