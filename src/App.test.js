import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header and form submit button', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /meeting cost calculator/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add person to meeting/i })).toBeInTheDocument();
});
