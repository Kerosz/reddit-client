export type TPost = {
  post: object;
  comments: object[];
};

export type TPage = {
  before: string | null;
  after: string | null;
};

export interface IFetch {
  status: 'idle' | 'pending' | 'failed' | 'succeeded';
  error: string | null;
  isLoading: true | false;
  isError: true | false;
  page: TPage;
}
