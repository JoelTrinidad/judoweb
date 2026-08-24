import { useState } from 'react';
import { Filters, Technique, TechniqueWithContent } from '../interfaces';
import { getTechnique, getTechniqueList } from '../techniques.service';
import { useQuery } from '@tanstack/react-query';

export default function useTechniques() {
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({ grade: '', categoryKey: '' });

  const {
    isLoading: techniquesLoading,
    isError: techniquesError,
    data: techniques = [],
  } = useQuery<Technique[]>({
    queryKey: ['techniques', filters],
    queryFn: async () => await getTechniqueList({ filters }),
  });

  const { isError: selectedTechniqueError, data: selectedTechnique = null } = useQuery<
    TechniqueWithContent | undefined
  >({
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
    techniquesError,
    selectedTechnique,
    selectedTechniqueError,
    filters,
    handleTechniqueOnclick,
    changeFilters,
  };
}
