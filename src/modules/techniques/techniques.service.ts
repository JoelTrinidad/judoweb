import { BACKEND_URL } from '../core/constants';
import { Technique, TechniqueWithDescription } from './interfaces';

export async function getTechniqueList(): Promise<Technique[]> {
  return fetch(`${BACKEND_URL}/api/techniques`)
    .then((res) => {
      return res.json();
    })
    .then(({ data }) => {
      return data;
    });
}

export async function getTechnique(id: string): Promise<TechniqueWithDescription> {
  console.log(BACKEND_URL);

  return fetch(`${BACKEND_URL}/api/techniques/${id}`)
    .then((res) => {
      return res.json();
    })
    .then(({ data }) => {
      return data;
    });
}
