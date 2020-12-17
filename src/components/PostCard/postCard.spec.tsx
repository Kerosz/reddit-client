import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostCard, { ListProps } from './index';

const renderWithMemoryAndProps = (
  Component: React.FC | any,
  props: ListProps,
) =>
  render(
    <MemoryRouter>
      <Component {...props} />
    </MemoryRouter>,
  );

describe('Post card component', () => {
  beforeEach(() => {
    const postProps = {
      data: {
        subreddit: 'news',
        thumbnail: 'http://reddit.com/test-image.jpg',
        author: 'newyorktimes',
        selftext: 'Peole are holding hands and singing together',
        title: 'The world is nice',
        url: 'http://reddit.com/test-image.jpg',
        permalink: '/r/subreddit/comments/ke6j9j/the_world_is_nice/',
        ups: '91.1kk',
      },
    };
    renderWithMemoryAndProps(PostCard, postProps);
  });
  afterEach(() => cleanup);

  describe('Rendering', () => {
    it('Should render without errors', () => {
      expect(screen).toBeTruthy();
    });

    it('Should render a post with data', () => {
      const subreddit = screen.getByTestId('subreddit');
      const author = screen.getByTestId('author');
      const title = screen.getByTestId('title');
      const description = screen.getByTestId('description');

      expect(subreddit).toHaveTextContent('r/news');
      expect(author).toHaveTextContent('Posted by u/newyorktimes');
      expect(title).toHaveTextContent('The world is nice');
      expect(description).toHaveTextContent(
        'Peole are holding hands and singing together',
      );
    });
  });
});
