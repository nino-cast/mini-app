import Link from 'next/link';
import { useAuth } from '../context/auth';
import Image from 'next/image';

const Header = () => {
  const auth = useAuth();

  return (
    <header className="border-b flex items-center p-4">
      <h1>
        <Link href="/">
          <a className="text-lg font-bold">Mini App</a>
        </Link>
      </h1>
      <span className="flex-1"></span>
      {auth === null && (
        <button className="rounded bg-blue-500 text-white px-4 py-2">
          ログイン
        </button>
      )}
      {auth && (
        <button>
          <Image src={auth.photoURL} width="40" height="40" alt="" />
        </button>
      )}
    </header>
  );
};

export default Header;
