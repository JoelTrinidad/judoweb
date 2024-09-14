import { useEffect, useState } from 'react';
import { Word } from '../interfaces';
import { getWords } from '../glossary-words.service';

export default function useWords() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    getWords().then((words) => {
      setWords(words);
    });
  }, []);

  return {
    words,
  };
}
