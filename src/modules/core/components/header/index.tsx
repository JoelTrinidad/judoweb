import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="text-white w-full px-5 py-4 fixed">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold underline">JudoDigital</h1>
        </Link>
      </div>
    </div>
  );
}
