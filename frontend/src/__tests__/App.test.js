import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/';
import App from '../App';

test('renders the correct content', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello from React!')).toBeInTheDocument();
});
