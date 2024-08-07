import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GlossaryWord from './glossary-word';
import { Word } from '../interfaces';
describe('glossary-word', () => {
  afterEach(cleanup);

  it('should render the word content', () => {
    const word: Word = { word: 'Judo', meaning: 'Camino de la suavidad' };
    render(<GlossaryWord word={word} />);

    const wordInDocument = screen.getByText('Judo');

    expect(wordInDocument.textContent).toBe(word.word);

    const meaningInDocument = screen.getByText(/Camino/);

    expect(meaningInDocument.textContent).toBe(word.meaning);
  });
});
