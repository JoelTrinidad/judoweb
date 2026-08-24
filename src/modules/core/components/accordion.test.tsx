import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import Accordion from './accordion';

describe('Accordion', () => {
  afterEach(cleanup);

  const items = [
    { key: 'a', title: 'Kuzushi', content: 'Contenido de kuzushi' },
    { key: 'b', title: 'Tsukuri', content: 'Contenido de tsukuri' },
  ];

  it('renders every item title, collapsed by default', () => {
    render(<Accordion items={items} type="multiple" />);

    expect(screen.getByText('Kuzushi')).toBeInTheDocument();
    expect(screen.getByText('Tsukuri')).toBeInTheDocument();
    expect(screen.queryByText('Contenido de kuzushi')).not.toBeInTheDocument();
  });

  it('type="multiple" keeps a previously opened item open when another one opens', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} type="multiple" />);

    await user.click(screen.getByText('Kuzushi'));
    await user.click(screen.getByText('Tsukuri'));

    expect(screen.getByText('Contenido de kuzushi')).toBeInTheDocument();
    expect(screen.getByText('Contenido de tsukuri')).toBeInTheDocument();
  });

  it('type="single" closes the previously opened item when another one opens', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} type="single" />);

    await user.click(screen.getByText('Kuzushi'));
    expect(screen.getByText('Contenido de kuzushi')).toBeInTheDocument();

    await user.click(screen.getByText('Tsukuri'));
    expect(screen.queryByText('Contenido de kuzushi')).not.toBeInTheDocument();
    expect(screen.getByText('Contenido de tsukuri')).toBeInTheDocument();
  });
});
