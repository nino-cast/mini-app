import Link from 'next/link';
import { useAuth } from '../context/auth';
import { login } from '../lib/auth';
import Button from './button';

const Header = () => {
  const user = useAuth();

  return (
    <header className="border-b flex items-center p-4">
      <h1>
        <Link href="/">
          <a className="text-2xl font-logo">iam</a>
        </Link>
      </h1>
      <span className="flex-1"></span>
      {user === null && <Button onClick={login}>ログイン</Button>}
      {user && <button>ユーザーメニュー</button>}
    </header>
  );
};

export default Header;
