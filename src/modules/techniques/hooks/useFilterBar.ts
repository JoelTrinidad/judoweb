import { getCategories, getGrades, getSubcategories } from '../techniques.service';
import { Category, Filters, Grade, Subcategory } from '../interfaces';
import { useQuery } from '@tanstack/react-query';

interface Props {
  filters: Filters;
  changeFilters: (newFilters: Partial<Filters>) => void;
}
export default function useFilterBar({ filters, changeFilters }: Props) {
  const { isLoading: gradesLoading, data: grades = [] } = useQuery<Grade[]>({
    queryKey: ['grades'],
    queryFn: getGrades,
  });

  const { isLoading: categoriesLoading, data: categories = [] } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { isLoading: subcategoriesLoading, data: subcategories = [] } = useQuery<Subcategory[]>({
    queryKey: ['subcategories', filters],
    queryFn: async () => getSubcategories({ filters }),
  });

  const handleOnChange = ({ filterName, value }: { filterName: string; value: string }) => {
    changeFilters({ [filterName]: value });
  };

  return {
    grades,
    categories,
    subcategories,
    isLoading: {
      grades: gradesLoading,
      categories: categoriesLoading,
      subcategories: subcategoriesLoading,
    },
    handleOnChange,
  };
}
