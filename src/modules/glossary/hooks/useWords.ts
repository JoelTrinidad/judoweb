import { useEffect, useState } from 'react';
import { Word } from '../interfaces';
import { getWords } from '../glossary-words.service';

export default function useWords() {
  const [words, setWords] = useState<Word[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWords()
      .then((words) => {
        setWords(words);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, []);

  return {
    words,
    error,
  };
}
