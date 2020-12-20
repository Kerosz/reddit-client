import React from 'react';

export type CommentDataProps = {
  data?: {
    title: string;
  };
};

const CommentCard: React.FC<CommentDataProps> = ({
  data,
}): React.ReactElement | null => {
  if (!data) return null;

  return <h1>{data.title}</h1>;
};

export default CommentCard;
