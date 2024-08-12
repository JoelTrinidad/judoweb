import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../constants';

const selectedRouteStyles = 'text-white  border-b-2';
export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="text-white w-full px-5 py-4 flex justify-between items-center fixed z-10">
      <Link to={routes.home.path}>
        <h1 className="text-3xl font-bold">JudoDigital</h1>
      </Link>
      <nav>
        <ul className="text-2xl text-gray-300 flex gap-5">
          {Object.values(routes).map((route) => {
            return (
              <li
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
