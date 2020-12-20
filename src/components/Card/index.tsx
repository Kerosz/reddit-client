import React from 'react';
import SubredditCard, { SubredditDataProps } from './subredditCard';
import PostCard, { PostDataProps } from './postCard';
import CommentCard, { CommentDataProps } from './commentCard';

type Props = {
  component?: string | null;
  type?: 'comment' | 'subreddit' | null;
  postProps?: PostDataProps | null;
  subredditProps?: SubredditDataProps | null;
  commentProps?: CommentDataProps | null;
};

const Card: React.FC<Props> = ({
  component = 'div',
  type,
  postProps,
  subredditProps,
  commentProps,
}) => {
  if (type === 'subreddit') {
    return <SubredditCard as={component} {...subredditProps} />;
  }

  if (type === 'comment') {
    return <CommentCard as={component} {...commentProps} />;
  }

  return <PostCard as={component} {...postProps} />;
};

export default Card;
