import UserGuard from '../../guards/user-guard';
import Link from 'next/link';

const Edit = () => {
  return (
    <UserGuard>
      <div className="container">
        <Link href="/mypage">
          <a>戻る</a>
        </Link>
        <form>
          <button>保存</button>
        </form>
      </div>
    </UserGuard>
  );
};

export default Edit;
