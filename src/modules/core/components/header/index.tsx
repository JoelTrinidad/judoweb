import { Link, useLocation } from 'react-router-dom';
import { useId } from 'react';

import { routes } from '../../constants';

const selectedRouteStyles = 'text-white  border-b-2 border-yellow-400';
export default function Header() {
  const { pathname } = useLocation();
  const id = useId();

  return (
    <header className="text-white w-full px-5 py-4 flex justify-between items-center fixed z-10">
      <Link to={routes.home.path}>
        <h1 className="text-transparent text-3xl font-bold bg-gradient-to-br from-blue-300 to-blue-600 bg-clip-text">
          JudoDigital
        </h1>
      </Link>
      <nav>
        <ul className="text-2xl text-gray-300 flex gap-5">
          {Object.values(routes).map((route) => {
            return (
              <li
                key={`${id}-${route.name}`}
                className={`${pathname === route.path ? selectedRouteStyles : ''} hover:text-white transition duration-500 ease-in-out`}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
