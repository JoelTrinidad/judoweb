import { useEffect, useState } from 'react';
import { Technique } from '../interfaces';
import { getTechniques } from '../techniques.service';

export default function useTechniques() {
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const [techniques, setTechniques] = useState<Technique[]>([]);

  useEffect(() => {
    getTechniques().then((techniques) => {
      setTechniques(techniques);
    });
  }, []);

  const handleTechniqueOnclick = (technique: Technique) => {
    setSelectedTechnique(technique);
  };
  return {
    techniques,
    selectedTechnique,
    handleTechniqueOnclick,
  };
}
