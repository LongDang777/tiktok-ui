import React from 'react';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import Image from '~/components/Image';
import { InboxIcon, MessageIcon,  UploadIcon } from '~/components/Icons';
import Search from './Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <i className="bx bx-transfer-alt"></i>,
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
        icon: <i className="bx bx-question-mark"></i>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <i className="bx bxs-keyboard"></i>,
        title: 'Keyboard shortcuts',
    },
];

export default function Header() {
    const currentUser = true;
    
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
            icon: <i className="bx bx-user"></i>,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <i className="bx bx-coin-stack"></i>,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <i className="bx bx-camera-movie"></i>,
            title: 'Live Studio',
            to: '/coin',
        },
        {
            icon: <i className="bx bx-cog"></i>,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <i className="bx bx-log-out"></i>,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search/>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn', 'action-btn-upload')}>
                                    <UploadIcon /> <span>Upload</span>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon/>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
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
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0207b829201c4560499d0ff710ba08c~c5_100x100.jpeg?x-expires=1665972000&x-signature=Y1mBYw5PsmozoaxgclbSoAM0dcg%3D"
                                alt="Account-user"
                                fallBack="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
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
