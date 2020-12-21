import React from 'react';
import PostCard, { PostDataProps } from './postCard';
import CommentCard, { CommentDataProps } from './commentCard';
import SubredditCard, { SubredditDataProps } from './subredditCard';

type Props = {
  component?: React.ElementType;
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
    return <SubredditCard {...subredditProps} />;
  }

  if (type === 'comment') {
    return <CommentCard component={component} {...commentProps} />;
  }

  return <PostCard component={component} {...postProps} />;
};

export default Card;
