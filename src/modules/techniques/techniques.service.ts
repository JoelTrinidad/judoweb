import { BACKEND_URL } from '../core/constants';
import {
  Category,
  Filters,
  Grade,
  Subcategory,
  Technique,
  TechniqueWithDescription,
} from './interfaces';

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }

  const { data } = await res.json();

  return data;
}

export async function getTechniqueList({ filters }: { filters: Filters }): Promise<Technique[]> {
  const res = await fetch(`${BACKEND_URL}/api/techniques`, {
    method: 'POST',
    body: JSON.stringify({ filters }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<Technique[]>(res);
}

export async function getTechnique(
  id: string | null
): Promise<TechniqueWithDescription | undefined> {
  if (!id) return undefined;

  const res = await fetch(`${BACKEND_URL}/api/techniques/${id}`);

  return handleResponse<TechniqueWithDescription>(res);
}

export async function getGrades(): Promise<Grade[]> {
  const res = await fetch(`${BACKEND_URL}/api/techniques/grades`);

  return handleResponse<Grade[]>(res);
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BACKEND_URL}/api/techniques/categories`);

  return handleResponse<Category[]>(res);
}

export async function getSubcategories({ filters }: { filters: Filters }): Promise<Subcategory[]> {
  const res = await fetch(`${BACKEND_URL}/api/techniques/subcategories`, {
    method: 'POST',
    body: JSON.stringify({ filters }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<Subcategory[]>(res);
}
