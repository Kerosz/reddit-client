const API_URL = process.env.REACT_APP_API_URL || 'https://www.reddit.com';

const initialOptions = {
  headers: {
    accept: 'application/json',
  },
};

enum FetchError {
  POST = 'Failed to get post data',
  USER = 'Failed to get user data',
  COMMENTS = 'Failed to get comments data',
  SUBREDDIT = 'Failed to get subreddit data',
  ALL_POST = 'Failed to get posts data',
  ALL_SUBREDDITS = 'Failed to get subreddits data',
  POST_WITH_COMMENTS = 'Failed to get posts with comments data',
  SEARCH = 'No results found!',
}

const getSubreddit = async (subreddit: string, options = initialOptions) => {
  const url = `${API_URL}/r/${subreddit}/about.json`;

  const query = await fetch(url, options);
  const json = await query.json();

  if (query.ok) return json.data;

  throw new Error(json.message || FetchError.SUBREDDIT);
};

const getSubredditPosts = async (
  subreddit: string,
  options = initialOptions,
) => {
  const url = `${API_URL}/r/${subreddit}/.json`;

  const query = await fetch(url, options);
  const json = await query.json();

  if (query.ok) {
    return {
      after: json.data.after,
      before: json.data.before,
      posts: json.data.children.map((sp: any) => sp.data),
    };
  }

  throw new Error(json.message || FetchError.SUBREDDIT);
};

const getAllSubreddits = async (options = initialOptions) => {
  const url = `${API_URL}/subreddits.json`;

  const query = await fetch(url, options);
  const json = await query.json();

  if (query.ok) {
    return {
      after: json.data.after,
      before: json.data.before,
      subreddits: json.data.children.map((c: any) => c.data),
    };
  }

  throw new Error(json.message || FetchError.ALL_SUBREDDITS);
};

const getPost = async (post: string[], options = initialOptions) => {
  const [subreddit, id] = post;
  const url = `${API_URL}/r/${subreddit}/comments/${id}/.json`;

  const query = await fetch(url, options);

  const json = await query.json();

  if (query.ok) return json[0].data.children[0].data;

  throw new Error(json.message || FetchError.POST);
};

const getComments = async (post: string[], options = initialOptions) => {
  const [subreddit, id] = post;
  const url = `${API_URL}/r/${subreddit}/comments/${id}/.json`;

  const query = await fetch(url, options);

  const json = await query.json();

  if (query.ok) {
    return {
      after: json[1].data.after,
      before: json[1].data.before,
      comments: json[1].data.children.map((c: any) => c.data),
    };
  }

  throw new Error(json.message || FetchError.POST);
};

const getPostWithComments = async (
  post: string[],
  options = initialOptions,
) => {
  const [subreddit, id] = post;
  const url = `${API_URL}/r/${subreddit}/comments/${id}/.json`;

  const query = await fetch(url, options);

  const json = await query.json();

  if (query.ok) {
    return {
      after: json[1].data.after,
      before: json[1].data.before,
      comments: json[1].data.children.map((c: any) => c.data),
      post: json[0].data.children[0].data,
    };
  }

  throw new Error(json.message || FetchError.POST);
};

const getAllPosts = async (
  subreddit?: string,
  params: string = '',
  options = initialOptions,
) => {
  let url;
  if (subreddit) {
    url = `${API_URL}/r/${subreddit}/${params}.json`;
  } else {
    url = `${API_URL}/${params}.json`;
  }

  const query = await fetch(url, options);
  const json = await query.json();

  if (query.ok) {
    return {
      after: json.data.after,
      before: json.data.before,
      posts: json.data.children.map((p: any) => p.data),
    };
  }

  throw new Error(json.message || FetchError.ALL_POST);
};

const getUser = async (user: string, options = initialOptions) => {
  const url = `${API_URL}/user/${user}/about/.json`;

  const query = await fetch(url, options);
  const json = await query.json();

  if (query.ok) return json.data;

  throw new Error(json.message || FetchError.USER);
};

const getUserPosts = async (user: string, options = initialOptions) => {
  const url = `${API_URL}/user/${user}/.json`;

  const query = await fetch(url, options);
  const json = await query.json();

  if (query.ok) {
    const posts = json.data.children.filter((p: any) => p.kind === 't3');
    const comments = json.data.children.filter((c: any) => c.kind === 't1');

    return {
      after: json.data.after,
      before: json.data.before,
      posts: posts.map((p: any) => p.data),
      comments: comments.map((c: any) => c.data),
    };
  }

  throw new Error(json.message || FetchError.USER);
};

const getSearchResults = async (
  params: { q: string; type: string },
  options = initialOptions,
) => {
  const searchParams = new URLSearchParams(params);
  const url = `${API_URL}/search.json?${searchParams}`;

  const query = await fetch(url, options);
  const json = await query.json();

  if (query.ok) {
    return {
      after: json.data.after,
      before: json.data.before,
      search: json.data.children.map((sr: any) => sr.data),
    };
  }

  throw new Error(json.message || FetchError.SEARCH);
};

export default {
  getSubreddit,
  getAllSubreddits,
  getSubredditPosts,
  getPost,
  getComments,
  getPostWithComments,
  getUser,
  getUserPosts,
  getAllPosts,
  getSearchResults,
};
