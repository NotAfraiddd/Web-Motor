
import React from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEllipsisVertical, faGear, faKeyboard, faLanguage, faRightFromBracket, faSignOut } from '@fortawesome/free-solid-svg-icons';
import More from '../Proper/More';

import Tippy from '@tippyjs/react';


const cx = classNames.bind(styles);

const MORE_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'My profile',
        to: '/@',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MORE_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/',
        seperate: true,
    },
]

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
                <div className={cx('content-logo')}>
                    <img src={images.logo} alt="Logo" className={cx('logo')} />
                    <div>
                        <span className={cx('text-logo')}>M</span>
                        <span className={cx('text-logo')}>o</span>
                        <span className={cx('text-logo')}>t</span>
                        <span className={cx('text-logo')}>o</span>
                        <span className={cx('text-logo')}>r</span>
                    </div>
                </div>
                <Search />
                <div className={cx('actions')} style={{ display: 'flex' }}>
                    {currentUser ? (
                        <>
                            <Tippy content='Cart' interactive trigger='click'>
                                <button className={cx('btn-shopping')}>
                                    <img className={cx('img-btn-shopping')} src="https://petdy-shop.vercel.app/static/media/cart.26599e765bba7672745d.png" alt="" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button className={cx('btn-register')} outline>Register</Button>
                            <Button className={cx('btn-login')} primary>Login</Button>
                        </>
                    )}
                    <More items={currentUser ? userMenu : MORE_ITEMS} onChange={handleMenuChange}>
                        {
                            currentUser ? (
                                <img src='https://lh3.googleusercontent.com/ogw/AOh-ky1E5WwRt1mx2s8P3VfyKzeyruDDnLpsxt0Thg2R=s32-c-mo' alt='Account Default' className={cx('user-avatar')} />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </More>
                </div>
            </div>

        </div >
    );
}

export default Header;