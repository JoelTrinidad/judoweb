import { useEffect, useState } from 'react';
import { getCategories, getGrades, getSubcategories } from '../techniques.service';
import { Category, Filters, Grade, Subcategory } from '../interfaces';

interface Props {
  filters: Filters;
  changeFilters: (newFilters: Partial<Filters>) => void;
}
export default function useFilterBar({ filters, changeFilters }: Props) {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    getGrades().then((data) => {
      setGrades(data);
    });

    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    getSubcategories({ filters }).then((data) => {
      setSubcategories(data);
    });
  }, [filters]);

  const handleOnGradeChange = (value: string) => {
    changeFilters({ grade: value });
  };

  const handleOnCategoryChange = (value: string) => {
    changeFilters({ category: value });
  };

  const handleOnSubcategoryChange = (value: string) => {
    changeFilters({ subcategory: value });
  };

  return {
    grades,
    categories,
    subcategories,
    handleOnGradeChange,
    handleOnCategoryChange,
    handleOnSubcategoryChange,
  };
}
