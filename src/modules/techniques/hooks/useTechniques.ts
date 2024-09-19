import { useState } from 'react';
import { Filters, Technique, TechniqueWithDescription } from '../interfaces';
import { getTechnique, getTechniqueList } from '../techniques.service';
import { useQuery } from '@tanstack/react-query';

export default function useTechniques() {
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({ grade: '', category: '', subcategory: '' });
  const { isLoading: techniquesLoading, data: techniques = [] } = useQuery<Technique[]>({
    queryKey: ['techniques', filters],
    queryFn: async () => await getTechniqueList({ filters }),
  });
  const { data: selectedTechnique = [] } = useQuery<TechniqueWithDescription | undefined>({
    queryKey: ['selectedTechnique', selectedTechniqueId],
    queryFn: async () => await getTechnique(selectedTechniqueId),
    enabled: !!selectedTechniqueId,
  });

  const handleTechniqueOnclick = (technique: Technique) => {
    setSelectedTechniqueId(technique.id);
  };

  const changeFilters = (newFilters: Partial<Filters>) => {
    setFilters({ ...filters, ...newFilters });
  };

  return {
    techniques,
    techniquesLoading,
    selectedTechnique,
    filters,
    handleTechniqueOnclick,
    changeFilters,
  };
}
