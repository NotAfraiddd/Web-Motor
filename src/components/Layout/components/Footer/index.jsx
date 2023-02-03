import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../../Logo';
import { Text } from '@chakra-ui/react';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div style={{ position: 'relative' }}>
                <div className={cx('inner')}>
                    <div></div>
                </div>
            </div>
            <div className={cx('col')}>
                <div className={cx('col-1')}>
                    <Logo />
                    <p className={cx('text-content')}>
                        Lorem Ipsum is simply dummy text of the and typesetting
                        industry. Lorem Ipsum is dummy text of the printing.
                    </p>
                    <ul className={cx('menu')}>
                        <li className={cx('menu-items')}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="2"
                                    d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                                ></path>
                            </svg>
                            <p className={cx('text-item')}>
                                Ho Chi Minh City, Vietnam
                            </p>
                        </li>
                        <li className={cx('menu-items')}>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <p className={cx('text-item')}>+84 123 456 789</p>
                        </li>
                        <li className={cx('menu-items')}>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                ></path>
                            </svg>
                            <p className={cx('text-item')}>example@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className={cx('col-1')}>
                    <Text fontSize={'4xl'} fontWeight="bold">
                        Company
                    </Text>
                    <ul className={cx('menu')}>
                        <li className={cx('menu-items')}>About</li>
                        <li className={cx('menu-items')}>Blog</li>
                        <li className={cx('menu-items')}>Address</li>
                    </ul>
                </div>
                <div className={cx('col-1')}>
                    <Text fontSize={'4xl'} fontWeight="bold">
                        Service
                    </Text>
                    <ul className={cx('menu')}>
                        <li className={cx('menu-items')}>About</li>
                        <li className={cx('menu-items')}>Blog</li>
                        <li className={cx('menu-items')}>Address</li>
                    </ul>
                </div>
                <div className={cx('col-1')}>
                    <Text fontSize={'4xl'} fontWeight="bold">
                        Company
                    </Text>
                    <ul className={cx('menu')}>
                        <li className={cx('menu-items')}>About</li>
                        <li className={cx('menu-items')}>Blog</li>
                        <li className={cx('menu-items')}>Address</li>
                    </ul>
                </div>
                <div className={cx('col-1')}>
                    <Text fontSize={'4xl'} fontWeight="bold">
                        Newsletter
                    </Text>
                    <p className={cx('text-content')}>
                        Subscribe to our weekly Newsletter and receive updates
                        via email.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
