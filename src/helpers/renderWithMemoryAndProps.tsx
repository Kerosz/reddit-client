/* eslint-disable import/no-extraneous-dependencies */
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// TODO: Improve function types and usability
const renderWithMemoryAndProps = (
  Component: React.ReactElement<any> | any,
  props: any,
): RenderResult => {
  return render(
    <MemoryRouter>
      <Component {...props} />
    </MemoryRouter>,
  );
};

export default renderWithMemoryAndProps;
