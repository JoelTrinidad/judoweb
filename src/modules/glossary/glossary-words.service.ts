import { BACKEND_URL } from '../core/constants';
import { Word } from './interfaces';

export async function getWords(): Promise<Word[]> {
  const res = await fetch(`${BACKEND_URL}/api/glossary`);

  if (!res.ok) {
    throw new Error(`Failed to fetch glossary words: ${res.status} ${res.statusText}`);
  }

  const { data }: { data: Word[] } = await res.json();

  return data;
}
