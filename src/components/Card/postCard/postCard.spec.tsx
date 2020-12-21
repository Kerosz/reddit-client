import { cleanup } from '@testing-library/react';
import { renderWithMemoryAndProps } from '../../../helpers';

import PostCard from '.';

const dataProps = {
  subreddit: 'news',
  thumbnail: 'http://reddit.com/test-image.jpg',
  author: 'newyorktimes',
  selftext: 'Peole are holding hands and singing together',
  title: 'The world is nice',
  url: 'http://reddit.com/test-image.jpg',
  permalink: '/r/subreddit/comments/ke6j9j/the_world_is_nice/',
  ups: 3149,
};

describe('Post card component', () => {
  afterEach(() => cleanup);

  describe('Rendering', () => {
    it('Should throw an error if no component specified', () => {
      const props = {
        data: dataProps,
      };

      expect(() => renderWithMemoryAndProps(PostCard, props)).toThrowError(
        /^Component was not specified$/,
      );
    });

    it('Should return null if no data was passed', () => {
      const props = {
        component: 'div',
      };

      const { container } = renderWithMemoryAndProps(PostCard, props);

      expect(container.firstChild).toBeNull();
    });

    it('Should render without errors', () => {
      const props = {
        component: 'div',
        data: dataProps,
      };

      const wrapper = renderWithMemoryAndProps(PostCard, props);

      expect(wrapper).toBeTruthy();
    });

    it('Should render a post with data', () => {
      const props = {
        component: 'div',
        data: dataProps,
      };

      const { getByTestId } = renderWithMemoryAndProps(PostCard, props);

      const subreddit = getByTestId('subreddit');
      const author = getByTestId('author');
      const title = getByTestId('title');
      const description = getByTestId('description');

      expect(subreddit).toHaveTextContent('r/news');
      expect(author).toHaveTextContent('Posted by u/newyorktimes');
      expect(title).toHaveTextContent('The world is nice');
      expect(description).toHaveTextContent(
        'Peole are holding hands and singing together',
      );
    });
  });
});
