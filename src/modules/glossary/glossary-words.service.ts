import { BACKEND_URL } from '../core/constants';
import { Word } from './interfaces';

export async function getWords() {
  return fetch(`${BACKEND_URL}/api/glossary`)
    .then((res) => {
      return res.json();
    })
    .then(({ data }: { data: Word[] }) => {
      return data;
    });
}
