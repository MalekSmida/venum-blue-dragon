import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// local files
import Home from '../pages/index';

describe('Home', () => {
  it('Should renders home page', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /hello/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
