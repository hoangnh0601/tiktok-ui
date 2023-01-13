import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import ICONS from '~/constant/Icons';
import Button from '~/components/Button';
import styles from '~/layout/components/Header/Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <ICONS.Language />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <ICONS.Question />,
    title: 'Feedback and help',
    to: './feedback',
  },
  {
    icon: <ICONS.Keyboard />,
    title: 'Keyboard shortcut ',
  },
  {
    icon: <ICONS.HalfMoon />,
    title: 'Dark mode',
  },
];

function Header() {
  const userMenu = [
    {
      icon: <ICONS.Person />,
      title: 'View profile',
      to: './@hoaa',
    },
    {
      icon: <ICONS.LogoOutline />,
      title: 'Get Coins',
      to: './coin',
    },
    {
      icon: <ICONS.Camera />,
      title: 'LIVE Studio',
      to: './studio',
    },
    {
      icon: <ICONS.Gear />,
      title: 'Setting',
      to: './setting',
    },
    ...MENU_ITEMS,
    {
      icon: <ICONS.Logout />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to="/" className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Button leftIcon={<ICONS.Plus color="#161823" />} outlineGray>
                Upload
              </Button>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('btn-action')}>
                  <ICONS.Message color="#161823" />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('btn-action')}>
                  <ICONS.Inbox color="#161823" />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button leftIcon={<ICONS.Plus color="#161823" />} outlineGray>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image className={cx('user-avatar')} src="" alt="Avatar" />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
