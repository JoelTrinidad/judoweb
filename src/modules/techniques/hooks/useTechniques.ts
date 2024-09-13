import { useEffect, useState } from 'react';
import { Filters, Grade, Technique, TechniqueWithDescription } from '../interfaces';
import { getGrades, getTechnique, getTechniqueList } from '../techniques.service';

export default function useTechniques() {
  const [selectedTechnique, setSelectedTechnique] = useState<TechniqueWithDescription | null>(null);
  const [techniques, setTechniques] = useState<Technique[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [filters, setFilters] = useState<Filters>({ grade: '' });

  useEffect(() => {
    getTechniqueList({ filters }).then((techniques) => {
      setTechniques(techniques);
    });
  }, [filters]);

  useEffect(() => {
    getGrades().then((res) => {
      setGrades(res);
    });
  }, []);

  const handleTechniqueOnclick = (technique: Technique) => {
    getTechnique(technique.id).then((newTechnique) => {
      setSelectedTechnique(newTechnique);
    });
  };

  const changeFilters = (newFilters: Partial<Filters>) => {
    setFilters({ ...filters, ...newFilters });
  };

  return {
    techniques,
    grades,
    selectedTechnique,
    handleTechniqueOnclick,
    changeFilters,
  };
}
