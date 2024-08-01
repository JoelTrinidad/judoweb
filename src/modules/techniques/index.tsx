export default function Techniques() {
  return (
    <div className="flex flex-col items-center h-dvh pb-5">
      <h1 className="text-4xl font-semibold py-5">Técnicas</h1>
      <table className="table-fixed w-11/12 flex-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="w-2/6 border border-slate-600">Técnicas</th>
            <th className="w-4/6 border border-slate-600">Información</th>
          </tr>
        </thead>
        <tbody className="h-full">
          <tr className="w-full">
            <td className="w-2/6 align-top border border-slate-700">
              <ul>
                <li className="p-1.5 cursor-pointer border-b-2">Seoi-nage</li>
                <li className="p-1.5 cursor-pointer border-b-2">Ippon-seoi-nage</li>
                <li className="p-1.5 cursor-pointer border-b-2">Seoi-otoshi</li>
              </ul>
            </td>
            <td className="w-4/6 align-top p-2 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-3 mt-1">Seoi-nage</h3>
              <p className="mt-1.5 mb-2">
                Tori y uke se sostienen mutuamente en una posición natural derecha. Tori jala a Uke
                hacia adelante mientras da un ligero paso hacia atrás para desequilibrar a Uke. Tori
                coloca su pie derecho enfrente del pie derecho de uke y empieza a levantar a Uke con
                ambas manos.
              </p>
              <p className="mt-1.5 mb-2">
                Tori dobla ambas rodillas, gira sobre su pie derecho mientras baja la cadera y
                coloca su pie izquierdo delante del pie izquierdo de Uke. Tori y Uke ahora estan en
                la misma dirección. Tori dobla su codo derecho y lo coloca en la axila derecha de
                Uke, después jala hacia abajo el brazo derecho de Uke y lo mantiene contra el cuerpo
                de Tori, Mientras mantiene un contacto estrecho con el pecho de Uke
              </p>
              <p className="mt-1.5 mb-2">
                Tori levanta a Uke con ambas manos e inclina su cuerpo hacia adelante, mientras
                endereza ambas rodillas lanza a Uke sobre su hombro derecho. Con el brazo derecho de
                Tori actuando como eje, el cuerpo de Uke girará y caerá.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
