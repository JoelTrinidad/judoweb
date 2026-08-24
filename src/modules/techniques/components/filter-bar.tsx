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
  const { grades, categoryLevels, isLoading, isError, handleGradeChange, handleCategoryChange } =
    useFilterBar({ filters, changeFilters });

  const gradesOptions = useMemo(
    () =>
      grades.map((grade) => ({
        key: `${grade.name}-${grade.type}`,
        value: `${grade.name}${grade.type}`,
        label: `${grade.name}${grade.type} - ${beltColor[(grade?.beltColor as keyof typeof beltColor) ?? 'none']}`,
      })),
    [grades]
  );

  const hasError = isError.grades || isError.categories;

  return (
    <div className="bg-gray-800 w-11/12 mt-5 mb-3 px-3 py-4 flex flex-col border justify-around border-slate-500">
      <div className="flex justify-around flex-wrap gap-2">
        <SelectInput
          isLoading={isLoading.grades}
          label="Grado"
          options={gradesOptions}
          handleOnOptionChange={handleGradeChange}
        />
        {categoryLevels.map((level, index) => (
          <SelectInput
            key={index}
            isLoading={level.isLoading}
            label={level.label}
            options={level.options.map((option) => ({
              key: option.key,
              value: option.key,
              label: `${option.name} - ${option.translation}`,
            }))}
            handleOnOptionChange={(value) => handleCategoryChange(index, value)}
          />
        ))}
      </div>
      {hasError && (
        <p className="text-red-400 text-sm pt-2" role="alert">
          No se pudieron cargar los filtros.
        </p>
      )}
    </div>
  );
}
