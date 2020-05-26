import React from 'react';
import { render } from '@testing-library/react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

test('renders learn react link', () => {
  const { getByText } = render(<ExampleContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
