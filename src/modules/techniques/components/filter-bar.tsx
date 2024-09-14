import { useEffect, useRef } from 'react';
import SelectInput from '../../core/components/select-input';
import { beltColor } from '../constants';
import useFilterBar from '../hooks/useFilterBar';
import { Filters } from '../interfaces';

interface Props {
  changeFilters: (newFilters: Partial<Filters>) => void;
}
export default function FilterBar({ changeFilters }: Props) {
  const { grades, handleOnGradeChange } = useFilterBar({ changeFilters });
  const gradesOptions = useRef(
    grades.map((grade) => ({
      key: `${grade.name}-${grade.type}`,
      value: `${grade.name}${grade.type}`,
      label: `${grade.name}${grade.type} - ${beltColor[(grade?.beltColor as keyof typeof beltColor) ?? 'none']}`,
    }))
  );

  useEffect(() => {
    gradesOptions.current = grades.map((grade) => ({
      key: `${grade.name}-${grade.type}`,
      value: `${grade.name}${grade.type}`,
      label: `${grade.name}${grade.type} - ${beltColor[(grade?.beltColor as keyof typeof beltColor) ?? 'none']}`,
    }));
  }, [grades]);

  return (
    <div className="bg-gray-800 w-11/12 mt-5 mb-3 px-3 py-4 flex border border-slate-500">
      <SelectInput
        label="Grado"
        options={gradesOptions.current}
        handleOnOptionChange={handleOnGradeChange}
      />
    </div>
  );
}
