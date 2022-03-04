import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CICD Practice', () => {
  render(<App />);
  const linkElement = screen.getByText(/CICD practice/i);
  expect(linkElement).toBeInTheDocument();
});
