import { Technique } from '../interfaces';

interface Props {
  techniques: Technique[];
  handleOnclick: (technique: Technique) => void;
  selected: Technique | null;
}
export default function TechniqueList({ techniques, handleOnclick, selected }: Props) {
  return (
    <ul className="overflow-auto max-h-[inherit]">
      {techniques.length > 0 &&
        techniques?.map((technique) => {
          return (
            <li
              key={technique.id}
              className={`${technique?.name === selected?.name ? 'bg-gray-800' : 'bg-gray-600/90'} hover:bg-gray-800 m-0.5 mb-1.5 py-2.5 px-4 rounded-xl cursor-pointer border border-b-2 border-slate-600 shadow-md shadow-gray-500`}
              onClick={() => handleOnclick(technique)}>
              {technique.name}
            </li>
          );
        })}
    </ul>
  );
}
