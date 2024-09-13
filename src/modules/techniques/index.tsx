import { ChangeEvent, useState } from 'react';
import techniqueBg from '../../assets/img/dojo_bg.jpg';
import TechniqueDescription from './components/technique-description';
import TechniqueList from './components/technique-list';
import useTechniques from './hooks/useTechniques';
import { beltColor } from './constants';

export default function Techniques() {
  const { techniques, grades, selectedTechnique, handleTechniqueOnclick, changeFilters } =
    useTechniques();
  const [grade, setGrade] = useState<string>('no');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGrade(e.target.value);
    changeFilters({ grade: e.target.value !== 'no' ? e.target.value.toLowerCase() : '' });
  };

  return (
    <div
      className="text-white h-dvh"
      style={{
        backgroundImage: `url(${techniqueBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}>
      <div className="bg-black/30 h-full pt-16 ">
        <div className="flex flex-col items-center h-full pb-5">
          <div className="bg-gray-800 w-11/12 mt-5 mb-3 px-3 py-4 flex border border-slate-500">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              <select
                value={grade}
                onChange={(e) => handleOnChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="no">filtrar por grado</option>
                {grades.length > 0 &&
                  grades.map((grade) => {
                    return (
                      <option
                        key={`${grade.name}-${grade.type}`}
                        value={`${grade.name}${grade.type}`}
                        className="p-3">
                        {`${grade.name}${grade.type} - ${beltColor[(grade?.beltColor as keyof typeof beltColor) ?? 'none']}`}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <table className="bg-gray-900/60 table-fixed w-11/12 flex-auto border-collapse border border-slate-500 backdrop-opacity-10">
            <thead>
              <tr>
                <th className="bg-gray-800 w-2/6 py-2 border-2 border-slate-600">Técnicas</th>
                <th className="bg-gray-800 w-4/6 py-2 border-2 border-slate-600">Información</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full">
                <td className=" w-2/6 align-top border-2 border-slate-600">
                  <TechniqueList
                    selected={selectedTechnique}
                    techniques={techniques}
                    handleOnclick={handleTechniqueOnclick}
                  />
                </td>
                <td className=" w-4/6 align-top py-2 px-5 border border-slate-600">
                  {selectedTechnique && <TechniqueDescription technique={selectedTechnique} />}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
