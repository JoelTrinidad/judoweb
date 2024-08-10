import { useState } from 'react';
import techniqueBg from '../../assets/img/dojo_bg.jpg';
import TechniqueDescription from './components/technique-description';
import TechniqueList from './components/technique-list';
import { Technique } from './interfaces';
export default function Techniques() {
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const techniques = [
    {
      name: 'Seoi-nage',
      description: [
        {
          tag: 'p',
          content: `Tori y uke se sostienen mutuamente en una posición natural derecha. Tori jala a
                  Uke hacia adelante mientras da un ligero paso hacia atrás para desequilibrar a
                  Uke. Tori coloca su pie derecho enfrente del pie derecho de uke y empieza a
                  levantar a Uke con ambas manos.`,
        },
        {
          tag: 'p',
          content: `Tori dobla ambas rodillas, gira sobre su pie derecho mientras baja la cadera y
                  coloca su pie izquierdo delante del pie izquierdo de Uke. Tori y Uke ahora estan
                  en la misma dirección. Tori dobla su codo derecho y lo coloca en la axila
                  derecha de Uke, después jala hacia abajo el brazo derecho de Uke y lo mantiene
                  contra el cuerpo de Tori, Mientras mantiene un contacto estrecho con el pecho de
                  Uke`,
        },
        {
          tag: 'p',
          content: `Tori levanta a Uke con ambas manos e inclina su cuerpo hacia adelante, mientras
          endereza ambas rodillas lanza a Uke sobre su hombro derecho. Con el brazo
          derecho de Tori actuando como eje, el cuerpo de Uke girará y caerá`,
        },
      ],
    },
    { name: 'Ippon-seoi-nage', description: [] },
    { name: 'Seoi-otoshi', description: [] },
  ];

  const handleTechniqueOnclick = (technique: Technique) => {
    setSelectedTechnique(technique);
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
          <h1 className="text-4xl font-semibold py-5">Técnicas</h1>
          <table className="bg-gray-900/60 table-fixed w-11/12 flex-auto border-collapse border border-slate-500 backdrop-blur-md">
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
