import Accordion from '../../core/components/accordion';
import { Word } from '../interfaces';

interface Props {
  word: Word;
}

export default function GlossaryWord({ word }: Props) {
  return (
    <li className="glossary_word">
      <Accordion
        type="single"
        items={[{ key: word.id, title: word.word, content: word.meaning }]}
      />
    </li>
  );
}
