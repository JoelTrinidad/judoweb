import { cleanup, render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import History from '.';
describe('History', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(<History />);
  });

  it('should render the title', () => {
    render(<History />);

    const title = screen.getByText('Historia');

    expect(title).toBeInTheDocument();
  });
});
