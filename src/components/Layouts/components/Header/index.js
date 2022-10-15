import React, { useEffect, useState } from 'react';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEllipsisVertical,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <i class='bx bx-transfer-alt'></i>,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'En',
          title: 'English',
        },
        {
          type: 'language',
          code: 'Vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <i class='bx bx-question-mark'></i>,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <i class='bx bxs-keyboard'></i>,
    title: 'Keyboard shortcuts',
  },
];

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //Handle change language
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <i class='bx bx-user'></i>,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <i class='bx bx-coin-stack' ></i>,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <i class='bx bx-camera-movie' ></i>,
      title: 'LIve Studio',
      to: '/coin',
    },
    {
      icon: <i class='bx bx-cog'></i>,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <i class='bx bx-log-out'></i>,
      title: 'Log out',
      to: '/',
      separate: true
    },
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search account and videos" spellCheck={false} />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <button>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            </button>

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 100]} content="Upload video" placement='bottom'>
                <button className={cx('action-btn')}>
                  <i class='bx bx-cloud-upload' ></i>
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="inbox" placement='bottom'>
                <button className={cx('action-btn')}>
                  <i class='bx bx-message-alt-minus'></i>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0207b829201c4560499d0ff710ba08c~c5_100x100.jpeg?x-expires=1665972000&x-signature=Y1mBYw5PsmozoaxgclbSoAM0dcg%3D"
                alt="Account-user"
              />
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
