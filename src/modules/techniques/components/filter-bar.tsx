import { useMemo } from 'react';
import SelectInput from '../../core/components/select-input';
import { beltColor } from '../constants';
import useFilterBar from '../hooks/useFilterBar';
import { Filters } from '../interfaces';

interface Props {
  filters: Filters;
  changeFilters: (newFilters: Partial<Filters>) => void;
}

export default function FilterBar({ filters, changeFilters }: Props) {
  const { isLoading, isError, grades, categories, subcategories, handleOnChange } = useFilterBar({
    filters,
    changeFilters,
  });

  const gradesOptions = useMemo(
    () =>
      grades.map((grade) => ({
        key: `${grade.name}-${grade.type}`,
        value: `${grade.name}${grade.type}`,
        label: `${grade.name}${grade.type} - ${beltColor[(grade?.beltColor as keyof typeof beltColor) ?? 'none']}`,
      })),
    [grades]
  );

  const categoriesOptions = useMemo(
    () =>
      categories.map((category) => ({
        key: category.key,
        value: category.key,
        label: `${category.name} - ${category.translation}`,
      })),
    [categories]
  );

  const subcategoriesOptions = useMemo(
    () =>
      subcategories.map((subcategory) => ({
        key: subcategory.key,
        value: subcategory.key,
        label: `${subcategory.name} - ${subcategory.translation}`,
      })),
    [subcategories]
  );

  const hasError = isError.grades || isError.categories || isError.subcategories;

  return (
    <div className="bg-gray-800 w-11/12 mt-5 mb-3 px-3 py-4 flex flex-col border justify-around border-slate-500">
      <div className="flex justify-around">
        <SelectInput
          isLoading={isLoading.grades}
          label="Grado"
          options={gradesOptions}
          handleOnOptionChange={(value) => handleOnChange({ filterName: 'grade', value })}
        />
        <SelectInput
          isLoading={isLoading.categories}
          label="Categoría"
          options={categoriesOptions}
          handleOnOptionChange={(value) => handleOnChange({ filterName: 'category', value })}
        />
        <SelectInput
          isLoading={isLoading.categories && isLoading.subcategories}
          label="Subcategoría"
          options={subcategoriesOptions}
          handleOnOptionChange={(value) => handleOnChange({ filterName: 'subcategory', value })}
        />
      </div>
      {hasError && (
        <p className="text-red-400 text-sm pt-2" role="alert">
          No se pudieron cargar los filtros.
        </p>
      )}
    </div>
  );
}
