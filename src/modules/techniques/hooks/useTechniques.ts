import { useEffect, useState } from 'react';
import { Filters, Technique, TechniqueWithDescription } from '../interfaces';
import { getTechnique, getTechniqueList } from '../techniques.service';

export default function useTechniques() {
  const [selectedTechnique, setSelectedTechnique] = useState<TechniqueWithDescription | null>(null);
  const [techniques, setTechniques] = useState<Technique[]>([]);
  const [filters, setFilters] = useState<Filters>({ grade: '' });

  useEffect(() => {
    getTechniqueList({ filters }).then((techniques) => {
      setTechniques(techniques);
    });
  }, [filters]);

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
    selectedTechnique,
    handleTechniqueOnclick,
    changeFilters,
  };
}
