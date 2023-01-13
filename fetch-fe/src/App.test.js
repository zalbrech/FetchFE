import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app snapshot', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  const { asFragment } = render(<App />)

  expect(asFragment(<App />)).toMatchSnapshot()
});
