export default function Techniques() {
  return (
    <div className="flex flex-col items-center h-dvh">
      <h1>Técnicas</h1>
      <table className="table-fixed w-11/12 flex-auto">
        <thead>
          <tr>
            <th className="w-2/6">Técnicas</th>
            <th className="w-4/6">Información</th>
          </tr>
        </thead>
        <tbody className="h-full">
          <tr className="w-full">
            <td className="w-2/6">
              <ul>
                <li>Seoi-nage</li>
                <li>Ippon-seoi-nage</li>
                <li>Seoi-otoshi</li>
              </ul>
            </td>
            <td className="w-4/6">Malcolm Lockyer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
