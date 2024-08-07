import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl font-bold underline">JudoDigital</h1>
      </Link>
    </div>
  );
}
