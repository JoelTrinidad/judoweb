import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import GlossaryWord from './glossary-word';
import { Word } from '../interfaces';
describe('glossary-word', () => {
  afterEach(cleanup);

  it('should render the word content', async () => {
    const user = userEvent.setup();
    const word: Word = { id: '1', word: 'Judo', meaning: 'Camino de la suavidad' };
    render(<GlossaryWord word={word} />);

    const wordInDocument = screen.getByText('Judo');

    expect(wordInDocument.textContent).toBe(word.word);
    // El contenido del acordeón se desmonta del DOM mientras está cerrado, así que
    // hay que abrirlo antes de poder verificar el significado.
    await user.click(wordInDocument);

    const meaningInDocument = screen.getByText(/Camino/);

    expect(meaningInDocument.textContent).toBe(word.meaning);
  });
});
