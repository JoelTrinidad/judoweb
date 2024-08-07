import { Word } from '../interfaces';
interface Props {
  word: Word;
}
export default function GlossaryWord({ word }: Props) {
  return (
    <li className="glossary_word">
      <p>{word.word}</p>
      <p>{word.meaning}</p>
    </li>
  );
}
