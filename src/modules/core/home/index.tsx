import jigoroStatute from '../../../assets/img/jigoro-kano-statue.png';
import tecnicasBackgroud from '../../../assets/img/tecnicas-background.jpg';
import glosarioBackgroud from '../../../assets/img/glosario-background.jpg';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

export default function Home() {
  return (
    <div className="bg-gray-800 text-white pt-[10dvh]">
      <div className="h-[90dvh]">
        <div className="h-5/6">
          <ul className="grid grid-cols-3 w-full h-full text-4xl font-bold">
            <li className="h-full overflow-hidden">
              <Link
                style={{
                  backgroundImage: `url(${jigoroStatute})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="grid place-content-center h-full min-h-60 transition-all ease-in-out duration-300 grayscale hover:grayscale-0 hover:scale-105"
                to={routes.history.path}>
                {routes.history.name}
              </Link>
            </li>
            <li className="h-full overflow-hidden">
              <Link
                style={{
                  backgroundImage: `url(${tecnicasBackgroud})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="grid place-content-center h-full min-h-60 transition-all ease-in-out duration-300 grayscale hover:grayscale-0 hover:scale-105"
                to={routes.techniques.path}>
                {routes.techniques.name}
              </Link>
            </li>
            <li className="h-full overflow-hidden">
              <Link
                style={{
                  backgroundImage: `url(${glosarioBackgroud})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="grid place-content-center h-full min-h-60 transition-all ease-in-out duration-300 grayscale hover:grayscale-0 hover:scale-105"
                to={routes.glossary.path}>
                {routes.glossary.name}
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-1/6 text-center py-6 font-medium grid place-content-center">
          <p className="text-3xl pb-2">Este proyecto es con fines de amor al judo</p>
          <p className="text-xl">
            La información encontrada aqui es una traducción e interpretacion realizada de algunas
            fuentes como la federacion internacional de judo o el Kodokan por lo que puede contener
            algunos errores
          </p>
        </div>
      </div>
    </div>
  );
}
