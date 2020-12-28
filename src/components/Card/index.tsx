import React from 'react';
import PostCard, { PostDataProps, TPostData } from './postCard';
import CommentCard, { CommentDataProps, TCommentData } from './commentCard';
import SubredditCard, {
  SubredditDataProps,
  TSubredditData,
} from './subredditCard';

type Props = {
  component?: React.ElementType;
  type?: 'comment' | 'subreddit' | null;
  data?: TPostData & TSubredditData & TCommentData;
  postProps?: PostDataProps | null;
  subredditProps?: SubredditDataProps | null;
  commentProps?: CommentDataProps | null;
};

const Card: React.FC<Props> = ({
  component = 'div',
  type,
  data,
  postProps,
  subredditProps,
  commentProps,
}) => {
  if (type === 'subreddit') {
    return <SubredditCard data={data} {...subredditProps} />;
  }

  if (type === 'comment') {
    return <CommentCard component={component} data={data} {...commentProps} />;
  }

  return <PostCard component={component} data={data} {...postProps} />;
};

export default Card;
