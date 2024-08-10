import { useId } from 'react';
import { Technique } from '../interfaces';

interface Props {
  technique: Technique;
}
export default function TechniqueDescription({ technique }: Props) {
  const id = useId();
  return (
    <>
      <h3 className="text-2xl font-semibold mb-3 mt-1">{technique.name}</h3>
      <div>
        {technique.description?.map((element, index) => {
          if (element.tag === 'p') {
            return (
              <p key={`${id}-${element.tag}-${index}`} className="mt-1.5 mb-2">
                {element.content}
              </p>
            );
          }
        })}
      </div>
    </>
  );
}
