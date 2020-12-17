import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import PostCard, { ListProps } from './index';

const renderWithProps = (Component: React.FC | any, props: ListProps) =>
  render(<Component {...props} />);

describe('Post card component', () => {
  beforeEach(() => {
    const postProps = {
      data: {
        subreddit: 'news',
        thumbnail: 'http://reddit.com/test-image.jpg',
        author: 'newyorktimes',
        selftext: 'Peole are holding hands and singing together',
        title: 'The world is a nice place',
        url: 'http://reddit.com/test-image.jpg',
        ups: '91.1kk',
      },
    };
    renderWithProps(PostCard, postProps);
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

      expect(subreddit.textContent).toBe('r/news');
      expect(author.textContent).toBe('Posted by u/newyorktimes');
      expect(title.textContent).toBe('The world is a nice place');
      expect(description.textContent).toBe(
        'Peole are holding hands and singing together',
      );
    });
  });
});
