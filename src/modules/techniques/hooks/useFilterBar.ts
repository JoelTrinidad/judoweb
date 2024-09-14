import { useEffect, useState } from 'react';
import { getGrades } from '../techniques.service';
import { Filters, Grade } from '../interfaces';

interface Props {
  changeFilters: (newFilters: Partial<Filters>) => void;
}
export default function useFilterBar({ changeFilters }: Props) {
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    getGrades().then((data) => {
      setGrades(data);
    });
  }, []);

  const handleOnGradeChange = (value: string) => {
    changeFilters({ grade: value });
  };

  return {
    grades,
    handleOnGradeChange,
  };
}
