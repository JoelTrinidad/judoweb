import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, it, expect, describe } from 'vitest';
import TechniqueDescription from './technique-description';
import { TechniqueWithContent } from '../interfaces';

describe('TechniqueDescription', () => {
  afterEach(cleanup);

  const technique: TechniqueWithContent = {
    id: '1',
    name: 'Seoi-nage',
    content: {
      sections: [
        {
          key: 'kuzushi',
          title: 'Kuzushi',
          blocks: [
            { type: 'paragraph', text: 'Párrafo 1 de kuzushi.' },
            { type: 'paragraph', text: 'Párrafo 2 de kuzushi.' },
            {
              type: 'image',
              src: '/uploads/techniques/foo.jpg',
              alt: 'Kuzushi',
              caption: 'Leyenda de kuzushi',
            },
            { type: 'paragraph', text: 'Párrafo 3 de kuzushi.' },
          ],
        },
        {
          key: 'tsukuri',
          title: 'Tsukuri',
          blocks: [
            {
              type: 'image_group',
              images: [
                { src: '/uploads/techniques/a.jpg', alt: 'A' },
                { src: '/uploads/techniques/b.jpg', alt: 'B' },
              ],
              caption: 'Entrada de Tori',
            },
          ],
        },
        {
          key: 'kake',
          title: 'Kake',
          blocks: [
            { type: 'paragraph', text: 'Ejecución final.' },
            { type: 'video', url: 'https://youtube.com/watch?v=abc123', label: 'Demostración' },
          ],
        },
      ],
    },
  };

  it('renders the technique name and the three section titles', () => {
    render(<TechniqueDescription technique={technique} />);

    expect(screen.getByText('Seoi-nage')).toBeInTheDocument();
    expect(screen.getByText('Kuzushi')).toBeInTheDocument();
    expect(screen.getByText('Tsukuri')).toBeInTheDocument();
    expect(screen.getByText('Kake')).toBeInTheDocument();
  });

  it('keeps only one section open at a time and preserves block order within it', async () => {
    const user = userEvent.setup();
    render(<TechniqueDescription technique={technique} />);

    await user.click(screen.getByText('Kuzushi'));

    const firstParagraph = screen.getByText(/Párrafo 1 de kuzushi/);
    const image = screen.getByAltText('Kuzushi');
    const thirdParagraph = screen.getByText(/Párrafo 3 de kuzushi/);

    // El párrafo 1 y la imagen deben aparecer antes que el párrafo 3, en ese orden.
    expect(
      firstParagraph.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
    expect(
      image.compareDocumentPosition(thirdParagraph) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();

    await user.click(screen.getByText('Tsukuri'));

    expect(screen.queryByText(/Párrafo 1 de kuzushi/)).not.toBeInTheDocument();
    expect(screen.getByAltText('A')).toBeInTheDocument();
    expect(screen.getByAltText('B')).toBeInTheDocument();
    expect(screen.getByText('Entrada de Tori')).toBeInTheDocument();
  });

  it('renders a video block as an embeddable iframe', async () => {
    const user = userEvent.setup();
    render(<TechniqueDescription technique={technique} />);

    await user.click(screen.getByText('Kake'));

    const iframe = screen.getByTitle('Demostración');
    expect(iframe.tagName).toBe('IFRAME');
    expect(iframe.getAttribute('src')).toContain('youtube.com/embed/abc123');
  });
});
