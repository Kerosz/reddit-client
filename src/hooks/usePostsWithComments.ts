import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePostsWithComments = (url: string) => {
  const { data, error } = useSWR(url, fetcher, { dedupingInterval: 3000 });

  const post = data && data[0]?.data.children[0].data;
  const comments =
    data && data[1]?.data.children.filter((obj: any) => obj.kind === 't1');

  return {
    result: post,
    comments,
    isLoading: !data && error,
    isError: error,
  };
};

export default usePostsWithComments;
