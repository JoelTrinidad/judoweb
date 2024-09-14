import { Word } from '../interfaces';
import GlossaryWord from './glossary-word';

interface Props {
  wordList: Word[];
}

export default function GlossaryList({ wordList }: Props) {
  return (
    <div>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
        {wordList.map((word) => {
          return <GlossaryWord key={word.id} word={word} />;
        })}
      </ul>
    </div>
  );
}
