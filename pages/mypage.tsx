import { PencilIcon, ShareIcon } from '@heroicons/react/solid';
import UserCard from '../components/user-card';
import { useAuth } from '../context/auth';
import UserGuard from '../guards/user-guard';
import Link from 'next/link';

const Mypage = () => {
  const user = useAuth();

  const actions = [
    {
      icon: <ShareIcon />,
      label: 'シェア',
      link: `/${user?.id}`,
    },
    {
      icon: <PencilIcon />,
      label: '編集',
      link: '/mypage/edit',
    },
  ];

  return (
    <UserGuard>
      {(user) => (
        <div className="bg-gray-100 pt-10 pb-20">
          <div className="container">
            <div className="max-w-screen-sm mx-auto flex items-center space-x-2 justify-end mb-2">
              {actions.map((action) => (
                <Link href={action.link} key={action.label}>
                  <a className="flex items-center space-x-2 rounded-full text-sm border px-3 py-2 bg-white">
                    <span className="w-4 h-4">{action.icon}</span>
                    <span>{action.label}</span>
                  </a>
                </Link>
              ))}
            </div>
            <UserCard user={user} />
          </div>
        </div>
      )}
    </UserGuard>
  );
};

export default Mypage;
