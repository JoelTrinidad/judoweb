import { useEffect, useState } from 'react';
import { getCategories, getGrades } from '../techniques.service';
import { Category, Filters, Grade } from '../interfaces';

interface Props {
  changeFilters: (newFilters: Partial<Filters>) => void;
}
export default function useFilterBar({ changeFilters }: Props) {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getGrades().then((data) => {
      setGrades(data);
    });

    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleOnGradeChange = (value: string) => {
    changeFilters({ grade: value });
  };

  const handleOnCategoryChange = (value: string) => {
    changeFilters({ category: value });
  };

  return {
    grades,
    categories,
    handleOnGradeChange,
    handleOnCategoryChange,
  };
}
