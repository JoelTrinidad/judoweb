import jigoroStatute from '../assets/img/jigoro-kano-statue.png';
import tecnicasBackgroud from '../assets/img/tecnicas-background.jpg';
import glosarioBackgroud from '../assets/img/glosario-background.jpg';

export default function Home() {
  return (
    <div className="bg-blue-judo text-white">
      <div>
        <a href="/">
          <h1 className="text-3xl font-bold underline">JudoDigital</h1>
        </a>
      </div>
      <div className="h-screen">
        <div className="h-2/6 text-center py-6 font-medium">
          <p className="text-3xl pt-6 pb-8">Este proyecto es con fines de amor al judo</p>
          <p>
            La información encontrada aqui es una traducción e interpretacion realizada de algunas
            fuentes como la federacion internacional de judo o el Kodokan por lo que puede contener
            algunos errores
          </p>
        </div>
        <div className="h-4/6">
          <ul className="grid grid-cols-3 w-screen h-full text-4xl font-bold">
            <li className="h-full overflow-x-hidden">
              <a
                style={{
                  backgroundImage: `url(${jigoroStatute})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="grid place-content-center h-full min-h-60 transition-all ease-in-out duration-300 grayscale hover:grayscale-0 hover:scale-105"
                href="#">
                Historia
              </a>
            </li>
            <li className="h-full overflow-x-hidden">
              <a
                style={{
                  backgroundImage: `url(${tecnicasBackgroud})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="grid place-content-center h-full min-h-60 transition-all ease-in-out duration-300 grayscale hover:grayscale-0 hover:scale-105"
                href="#">
                Técnicas
              </a>
            </li>
            <li className="h-full overflow-x-hidden">
              <a
                style={{
                  backgroundImage: `url(${glosarioBackgroud})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="grid place-content-center h-full min-h-60 transition-all ease-in-out duration-300 grayscale hover:grayscale-0 hover:scale-105"
                href="#">
                Glosario
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
