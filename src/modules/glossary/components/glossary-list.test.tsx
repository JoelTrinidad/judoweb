import { cleanup, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GlossaryList from './glossary-list';
import { Word } from '../interfaces';

describe('glossary-list', () => {
  afterEach(cleanup);

  it('should render all the items', () => {
    const words: Word[] = [
      { word: 'Judo', meaning: 'Camino de la suavidad' },
      { word: 'Seiryoku-Zenyo', meaning: 'Maxina eficiencia del uso de la energia' },
      { word: 'Jita-Kyoei', meaning: 'Todo es unidad' },
    ];
    render(<GlossaryList wordList={words} />);
    const wordList = document.querySelectorAll('.glossary_word');

    expect(wordList.length).equals(words.length);
  });
});
