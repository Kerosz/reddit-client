import { cleanup } from '@testing-library/react';
import { renderWithMemoryAndProps } from '../../../helpers';

import SubredditCard from '.';

// TODO: Add tests to check if the data was succesfully rendered
const dataProps = {
  id: 'k151s9',
  display_name_prefixed: 'r/gaming',
  title: 'r/gaming',
  subscribers: 29415610,
  public_description:
    'A subreddit for (almost) anything related to games - video games, board games, card games, etc. (but not sports).',
};

describe('Comment Card component', () => {
  afterEach(() => cleanup);

  describe('Rendering', () => {
    it('Should return null if no data was passed', () => {
      const { container } = renderWithMemoryAndProps(SubredditCard, {});

      expect(container.firstChild).toBeNull();
    });

    it('Should render without errors', () => {
      const wrapper = renderWithMemoryAndProps(SubredditCard, dataProps);

      expect(wrapper).toBeTruthy();
    });
  });
});
