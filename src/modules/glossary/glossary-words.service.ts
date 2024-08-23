import { Word } from './interfaces';
import { words } from './mocks/glossary-words';

export async function getWords() {
  return new Promise<Word[]>((resolve) => {
    setTimeout(() => {
      resolve(words);
    }, 2000);
  });
}
