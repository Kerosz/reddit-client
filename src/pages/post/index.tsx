import React from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, Sidebar } from '../../components';
import homeStyles, { StyleProps } from '../home/home.styles';
import usePostsWithComments from '../../hooks/usePostsWithComments';

type ParamsProps = {
  subreddit: string;
  type: string;
  id: string;
  name: string;
};

const Post: React.FC<StyleProps> = ({ classes }) => {
  const { subreddit, type, id, name } = useParams<ParamsProps>();
  const postUrl = `https://www.reddit.com/r/${subreddit}/${type}/${id}/${name}/.json`;

  const { result: post, comments } = usePostsWithComments(postUrl);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <Sidebar type="post" />
          <div className={classes.content}>
            {post?.title}
            <ul>
              {comments?.map(({ data }: any) => (
                <li key={data.id}>{data.body}</li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(Post);
