import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App render successfully', () => {
  render(<App />);
  const rootElement = screen.getByRole('root');
  expect(rootElement).toBeInTheDocument();
});
