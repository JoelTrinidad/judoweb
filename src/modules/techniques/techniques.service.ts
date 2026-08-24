import { BACKEND_URL } from '../core/constants';
import { Category, Filters, Grade, Technique, TechniqueWithContent } from './interfaces';

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

export async function getTechnique(id: string | null): Promise<TechniqueWithContent | undefined> {
  if (!id) return undefined;

  const res = await fetch(`${BACKEND_URL}/api/techniques/${id}`);

  return handleResponse<TechniqueWithContent>(res);
}

export async function getGrades(): Promise<Grade[]> {
  const res = await fetch(`${BACKEND_URL}/api/techniques/grades`);

  return handleResponse<Grade[]>(res);
}

// Categorías raíz del árbol (primer nivel del filtro).
export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BACKEND_URL}/api/techniques/categories`);

  return handleResponse<Category[]>(res);
}

// Hijos directos de cualquier nodo del árbol — se reutiliza para cada nivel siguiente del
// filtro, sin importar la profundidad. Array vacío = el nodo es una hoja.
export async function getCategoryChildren(parentKey: string): Promise<Category[]> {
  const res = await fetch(`${BACKEND_URL}/api/techniques/categories/children`, {
    method: 'POST',
    body: JSON.stringify({ parentKey }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<Category[]>(res);
}
