import { cleanup } from '@testing-library/react';
import { renderWithMemoryAndProps } from '../../../helpers';

import CommentCard from '.';

const dataProps = {
  id: 'k151s9',
  author: 'newyorktimes',
  body: 'Peole are holding hands and singing together',
  ups: 6124,
};

describe('Comment Card component', () => {
  afterEach(() => cleanup);

  describe('Rendering', () => {
    it('Should throw an error if no component specified', () => {
      const props = {
        data: dataProps,
      };

      expect(() => renderWithMemoryAndProps(CommentCard, props)).toThrowError(
        /^Component was not specified$/,
      );
    });

    it('Should return null if no data was passed', () => {
      const props = {
        component: 'li',
      };

      const { container } = renderWithMemoryAndProps(CommentCard, props);

      expect(container.firstChild).toBeNull();
    });

    it('Should render without errors', () => {
      const props = {
        component: 'div',
        data: dataProps,
      };

      const wrapper = renderWithMemoryAndProps(CommentCard, props);

      expect(wrapper).toBeTruthy();
    });

    it('Should render the component with data', () => {
      const props = {
        component: 'div',
        data: dataProps,
      };

      const { getByTestId } = renderWithMemoryAndProps(CommentCard, props);

      const author = getByTestId('author');
      const body = getByTestId('body');

      expect(author).toHaveTextContent('newyorktimes');
      expect(body).toHaveTextContent(
        'Peole are holding hands and singing together',
      );
    });
  });
});
