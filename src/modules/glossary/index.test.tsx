import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Glossary from '.';

describe('Glossary', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ data: [] }),
      })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should render', () => {
    render(<Glossary />);

    const title = screen.getByText('Glosario');

    expect(title).toBeInTheDocument();
  });
});
