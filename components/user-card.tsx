import { User } from '../types/user';
import BlankText from './blank-text';
import UserLinkItem from './user-link-item';

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="max-w-screen-sm rounded-3xl shadow-xl overflow-hidden mx-auto grid grid-cols-3">
      <div className="col-span-1 bg-gradient-to-tr bg-gray-200 relative">
        {user.coverURL && (
          <img src={user.coverURL} alt="" className="object-cover h-full" />
        )}
      </div>
      <div className="col-span-2 flex items-center bg-white p-6 sm:p-10">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl mb-1">{user.name}</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            {user.title || <BlankText text="肩書きのダミーテキスト" />}
          </p>
          <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base">
            {user.description || (
              <BlankText text="プロフィールのダミーテキスト" length={4} />
            )}
          </p>
          {user.links?.length && (
            <div className="gap-5 mt-8 flex text-lg flex-wrap">
              {user.links?.map((url) => (
                <UserLinkItem key={url} url={url} />
              ))}
              <UserLinkItem url="github.com" />
              <UserLinkItem url="youtube.com" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
