import { LinkIcon } from '@heroicons/react/solid';
import {
  SiFacebook,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiQiita,
  SiTiktok,
  SiTwitter,
  SiYoutube,
  SiZenn,
} from 'react-icons/si';

type Props = {
  url: string;
};

const regs = [
  {
    host: 'github.com',
    icon: <SiGithub />,
  },
  {
    host: 'zenn.dev',
    icon: <SiZenn />,
  },
  {
    host: 'gmail.com',
    icon: <SiGmail />,
  },
  {
    host: 'youtube.com',
    icon: <SiYoutube />,
  },
  {
    host: 'twitter.com',
    icon: <SiTwitter />,
  },
  {
    host: 'facebook.com',
    icon: <SiFacebook />,
  },
  {
    host: 'tiktok.com',
    icon: <SiTiktok />,
  },
  {
    host: 'instagram.com',
    icon: <SiInstagram />,
  },
  {
    host: 'qiita.com',
    icon: <SiQiita />,
  },
];

const UserLinkItem = ({ url }: Props) => {
  let icon = <LinkIcon />;

  for (let reg of regs) {
    if (url.match(reg.host)) {
      icon = reg.icon;
      break;
    }
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export default UserLinkItem;
