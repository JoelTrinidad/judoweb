import { useEffect, useRef } from 'react';
import SelectInput from '../../core/components/select-input';
import { beltColor } from '../constants';
import useFilterBar from '../hooks/useFilterBar';
import { Filters } from '../interfaces';

interface Props {
  filters: Filters;
  changeFilters: (newFilters: Partial<Filters>) => void;
}

export default function FilterBar({ filters, changeFilters }: Props) {
  const { isLoading, grades, categories, subcategories, handleOnChange } = useFilterBar({
    filters,
    changeFilters,
  });
  const gradesOptions = useRef<SelectField[]>([]);
  const categoriesOptions = useRef<SelectField[]>([]);
  const subcategoriesOptions = useRef<SelectField[]>([]);

  useEffect(() => {
    gradesOptions.current = grades.map((grade) => ({
      key: `${grade.name}-${grade.type}`,
      value: `${grade.name}${grade.type}`,
      label: `${grade.name}${grade.type} - ${beltColor[(grade?.beltColor as keyof typeof beltColor) ?? 'none']}`,
    }));
  }, [grades]);

  useEffect(() => {
    categoriesOptions.current = categories.map((category) => ({
      key: category.key,
      value: category.key,
      label: `${category.name} - ${category.translation}`,
    }));
  }, [categories]);

  useEffect(() => {
    subcategoriesOptions.current = subcategories.map((subcategory) => ({
      key: subcategory.key,
      value: subcategory.key,
      label: `${subcategory.name} - ${subcategory.translation}`,
    }));
  }, [subcategories]);

  return (
    <div className="bg-gray-800 w-11/12 mt-5 mb-3 px-3 py-4 flex border justify-around border-slate-500">
      <SelectInput
        isLoading={isLoading.grades}
        label="Grado"
        options={gradesOptions.current}
        handleOnOptionChange={(value) => handleOnChange({ filterName: 'grade', value })}
      />
      <SelectInput
        isLoading={isLoading.categories}
        label="Categoría"
        options={categoriesOptions.current}
        handleOnOptionChange={(value) => handleOnChange({ filterName: 'category', value })}
      />
      <SelectInput
        isLoading={isLoading.categories && isLoading.subcategories}
        label="Subcategoría"
        options={subcategoriesOptions.current}
        handleOnOptionChange={(value) => handleOnChange({ filterName: 'subcategory', value })}
      />
    </div>
  );
}
