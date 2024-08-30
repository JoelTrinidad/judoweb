import { useEffect, useState } from 'react';
import { Technique, TechniqueWithDescription } from '../interfaces';
import { getTechnique, getTechniqueList } from '../techniques.service';

export default function useTechniques() {
  const [selectedTechnique, setSelectedTechnique] = useState<TechniqueWithDescription | null>(null);
  const [techniques, setTechniques] = useState<Technique[]>([]);

  useEffect(() => {
    getTechniqueList().then((techniques) => {
      setTechniques(techniques);
    });
  }, []);

  const handleTechniqueOnclick = (technique: Technique) => {
    getTechnique(technique.id).then((newTechnique) => {
      setSelectedTechnique(newTechnique);
    });
  };
  return {
    techniques,
    selectedTechnique,
    handleTechniqueOnclick,
  };
}
