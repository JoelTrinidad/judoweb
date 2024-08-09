import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { Word } from '../interfaces';

interface Props {
  word: Word;
}

export default function GlossaryWord({ word }: Props) {
  return (
    <li className="glossary_word">
      <details className="bg-gray-800 border  border-gray-600 rounded-lg shadow [&_svg]:open:-rotate-180 [&_ChevronDownIcon]:open:-rotate-180 [&_summary]:open:shadow [&_summary]:open:shadow-gray-950">
        <summary className="p-4 flex  justify-between items-center border-gray-600 gap-4 cursor-pointer">
          <p>{word.word}</p>
          <div>
            <ChevronDownIcon
              hanging={20}
              width={20}
              className="text-white stroke-2 rotate-0 transform transition-all duration-300"
            />
          </div>
        </summary>

        <p className="p-4">{word.meaning}</p>
      </details>
    </li>
  );
}
