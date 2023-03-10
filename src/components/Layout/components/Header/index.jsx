import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import More from '../Proper/More';

import Tippy from '@tippyjs/react';
import {
    AccountIcon,
    Feedback,
    LanguageIcon,
    Logout,
    SettingIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Logo from '../../../Logo';

const cx = classNames.bind(styles);

const MORE_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'rus',
                    title: 'Russian',
                },
            ],
        },
    },
    {
        icon: <Feedback />,
        title: 'Feedback and help',
        to: '/feedback',
    },
];

const userMenu = [
    {
        icon: <AccountIcon />,
        title: 'My profile',
        to: '/user-profile',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/setting',
    },
    ...MORE_ITEMS,
    {
        icon: <Logout />,
        title: 'Log out',
        to: '/',
        seperate: true,
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Logo />
                <Search />
                <div
                    className={cx('actions')}
                    style={{
                        display: 'flex',
                        width: '160px',
                        justifyContent: 'flex-end',
                    }}
                >
                    {currentUser ? (
                        <>
                            <Tippy content="Cart" interactive>
                                <button className={cx('btn-shopping')}>
                                    <img
                                        className={cx('img-btn-shopping')}
                                        src="https://petdy-shop.vercel.app/static/media/cart.26599e765bba7672745d.png"
                                        alt=""
                                    />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button className={cx('btn-register')} outline>
                                Register
                            </Button>
                            <Button className={cx('btn-login')} primary>
                                Login
                            </Button>
                        </>
                    )}
                    <More
                        items={currentUser ? userMenu : MORE_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://lh3.googleusercontent.com/ogw/AOh-ky1E5WwRt1mx2s8P323VfyKzeyruDDnLpsxt0Thg2R=s32-c-mo"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </More>
                </div>
            </div>
        </div>
    );
}

export default Header;
