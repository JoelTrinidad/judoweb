import { BACKEND_URL } from '../core/constants';
import { Filters, Grade, Technique, TechniqueWithDescription } from './interfaces';

export async function getTechniqueList({ filters }: { filters: Filters }): Promise<Technique[]> {
  return fetch(`${BACKEND_URL}/api/techniques`, {
    method: 'POST',
    body: JSON.stringify({ filters }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res: Response) => {
      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);

      return res.json();
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getTechnique(id: string): Promise<TechniqueWithDescription> {
  return fetch(`${BACKEND_URL}/api/techniques/${id}`)
    .then((res) => {
      return res.json();
    })
    .then(({ data }) => {
      return data;
    });
}

export async function getGrades(): Promise<Grade[]> {
  return fetch(`${BACKEND_URL}/api/techniques/grades`)
    .then((res) => {
      return res.json();
    })
    .then(({ data }) => {
      return data;
    });
}
