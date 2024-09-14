import { cleanup, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GlossaryList from './glossary-list';
import { Word } from '../interfaces';

describe('glossary-list', () => {
  afterEach(cleanup);

  it('should render all the items', () => {
    const words: Word[] = [
      { id: '1', word: 'Judo', meaning: 'Camino de la suavidad' },
      { id: '2', word: 'Seiryoku-Zenyo', meaning: 'Maxima eficiencia del uso de la energía' },
      { id: '3', word: 'Jita-Kyoei', meaning: 'Todo es unidad' },
    ];
    render(<GlossaryList wordList={words} />);
    const wordList = document.querySelectorAll('.glossary_word');

    expect(wordList.length).equals(words.length);
  });
});
