import { useId } from 'react';
import { Word } from '../interfaces';
import GlossaryWord from './glossary-word';

interface Props {
  wordList: Word[];
}

export default function GlossaryList({ wordList }: Props) {
  const wordIndex = useId();
  return (
    <div>
      <ul>
        {wordList.map((word, index) => {
          return <GlossaryWord key={`${wordIndex}-${index}-${word.word}`} word={word} />;
        })}
      </ul>
    </div>
  );
}
