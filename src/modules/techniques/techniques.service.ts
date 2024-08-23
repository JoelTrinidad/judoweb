import { Technique } from './interfaces';
import { techniques } from './mocks/techniques';

export async function getTechniques(): Promise<Technique[]> {
  return new Promise<Technique[]>((resolve) => {
    setTimeout(() => {
      resolve(techniques);
    }, 2000);
  });
}
