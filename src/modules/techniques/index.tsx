import techniqueBg from '../../assets/img/dojo_bg.jpg';
import TechniqueDescription from './components/technique-description';
import TechniqueList from './components/technique-list';
import useTechniques from './hooks/useTechniques';

export default function Techniques() {
  const { techniques, selectedTechnique, handleTechniqueOnclick } = useTechniques();

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
          <h1 className="text-4xl font-semibold py-5">Técnicas</h1>
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
