import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="text-white w-full px-5 py-4 flex justify-between items-center fixed z-10">
      <Link to="/">
        <h1 className="text-3xl font-bold">JudoDigital</h1>
      </Link>
      <nav>
        <ul className="text-2xl text-gray-300 flex gap-5">
          <li className="hover:text-white transition duration-500 ease-in-out">
            <Link to="history">Historia</Link>
          </li>
          <li className="hover:text-white transition duration-500 ease-in-out">
            <Link to="techniques">Técnicas</Link>
          </li>
          <li className="hover:text-white transition duration-500 ease-in-out">
            <Link to="glossary">Glosario</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
