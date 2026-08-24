import { useState } from 'react';
import { useQueries, useQuery } from '@tanstack/react-query';
import { getCategories, getCategoryChildren, getGrades } from '../techniques.service';
import { Category, Filters } from '../interfaces';

interface Props {
  filters: Filters;
  changeFilters: (newFilters: Partial<Filters>) => void;
}

interface CategoryLevel {
  label: string;
  options: Category[];
  value: string;
  isLoading: boolean;
}

export default function useFilterBar({ changeFilters }: Props) {
  // Claves elegidas en el árbol de categorías, de raíz a la más específica. La profundidad no
  // es fija (Nage-waza tiene más niveles que Katame-waza), así que crece/reduce dinámicamente.
  const [categoryPath, setCategoryPath] = useState<string[]>([]);

  const {
    isLoading: gradesLoading,
    isError: gradesError,
    data: grades = [],
  } = useQuery({
    queryKey: ['grades'],
    queryFn: getGrades,
  });

  const {
    isLoading: rootCategoriesLoading,
    isError: rootCategoriesError,
    data: rootCategories = [],
  } = useQuery({
    queryKey: ['categories', 'root'],
    queryFn: getCategories,
  });

  // Se piden en paralelo los hijos de cada nodo ya elegido: children[i] son las opciones del
  // dropdown que sigue a categoryPath[i]. Un array vacío en el último significa que ese nodo es
  // una hoja y no hay que agregar un dropdown más.
  const childrenQueries = useQueries({
    queries: categoryPath.map((key) => ({
      queryKey: ['categories', 'children', key],
      queryFn: () => getCategoryChildren(key),
    })),
  });

  const categoryLevels: CategoryLevel[] = [
    {
      label: 'Categoría',
      options: rootCategories,
      value: categoryPath[0] ?? '',
      isLoading: rootCategoriesLoading,
    },
  ];

  for (let i = 0; i < categoryPath.length; i++) {
    const query = childrenQueries[i];
    const children = query?.data ?? [];

    if (children.length > 0) {
      categoryLevels.push({
        label: i === 0 ? 'Subcategoría' : `Subcategoría (nivel ${i + 1})`,
        options: children,
        value: categoryPath[i + 1] ?? '',
        isLoading: false,
      });
    } else if (query?.isLoading) {
      categoryLevels.push({ label: 'Subcategoría', options: [], value: '', isLoading: true });
    }
    // Si children.length === 0 y no está cargando, categoryPath[i] es una hoja: no se agrega
    // un dropdown más.
  }

  const handleGradeChange = (value: string) => {
    changeFilters({ grade: value });
  };

  const handleCategoryChange = (levelIndex: number, value: string) => {
    const newPath = value
      ? [...categoryPath.slice(0, levelIndex), value]
      : categoryPath.slice(0, levelIndex);

    setCategoryPath(newPath);
    changeFilters({ categoryKey: newPath[newPath.length - 1] ?? '' });
  };

  const categoriesLoadError = rootCategoriesError || childrenQueries.some((query) => query.isError);

  return {
    grades,
    categoryLevels,
    isLoading: { grades: gradesLoading },
    isError: { grades: gradesError, categories: categoriesLoadError },
    handleGradeChange,
    handleCategoryChange,
  };
}
