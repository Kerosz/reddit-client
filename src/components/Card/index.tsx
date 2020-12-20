import React from 'react';
import SubredditCard, { SubredditDataProps } from './subredditCard';
import PostCard, { PostDataProps } from './postCard';
import CommentCard, { CommentDataProps } from './commentCard';

type Props = {
  type?: 'comment' | 'subreddit' | null | undefined;
  postProps?: PostDataProps | null | undefined;
  subredditProps?: SubredditDataProps | null | undefined;
  commentProps?: CommentDataProps | null | undefined;
};

const Card: React.FC<Props> = ({
  type,
  postProps,
  subredditProps,
  commentProps,
}) => {
  if (type === 'subreddit') {
    return <SubredditCard {...subredditProps} />;
  }

  if (type === 'comment') {
    return <CommentCard {...commentProps} />;
  }

  return <PostCard {...postProps} />;
};

export default Card;
