import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Glossary from '.';

describe('Glossary', () => {
  it('should render', () => {
    render(<Glossary />);

    const title = screen.getByText('Glosario');

    expect(title).toBeInTheDocument();
  });
});
