import jigoroStatute from './assets/img/jigoro-kano-statue.png';
function App() {
  return (
    <div className="h-screen bg-blue-judo text-white">
      <div>
        <a href="/">
          <h1 className="text-3xl font-bold underline">JudoDigital</h1>
        </a>
      </div>
      <div>
        <div className="h-2/6 text-center py-6 font-medium">
          <p className="text-3xl pt-6 pb-8">Este proyecto es con fines de amor al judo</p>
          <p>
            La información encontrada aqui es una traducción e interpretacion realizada de algunas
            fuentes como la federacion internacional de judo o el Kodokan por lo que puede contener
            algunos errores
          </p>
        </div>
        <div className="h-4/6">
          <ul className="grid grid-cols-3 w-screen text-xl font-bold">
            <li className="flex min-h-60 justify-center items-center">
              <a href="#">
                <div className=" relative">
                  <img className="w-full h-full" src={jigoroStatute} alt="" />
                  <span className="absolute z-10 left-1/2 top-1/2">Historia</span>
                </div>
              </a>
            </li>
            <li className="flex min-h-60 justify-center items-center">
              <a href="#">Técnicas</a>
            </li>
            <li className="flex min-h-60 justify-center items-center">
              <a href="#">Glosario</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
