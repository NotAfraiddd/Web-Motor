
import React, { useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import More from '../Proper/More';
import Tippy from '@tippyjs/react';
import { Wrapper } from '../Proper';
import MotorItem from '~/components/MotorItem';

const cx = classNames.bind(styles);

function Header() {

    const motorItems = [
        {
            _id: '1',
            name: 'BMW',
            price: '2000',
            avatar: 'https://autopro8.mediacdn.vn/2020/8/19/bmw-s1000rr-2-1597795333957285219652.jpg'
        },
        {
            _id: '2',
            name: 'BMW',
            price: '2000',
            avatar: 'https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2022/03/proevekoert-2020-yamaha-yzf-r1-amp-yzf-r1m-paa-jerez-img-2400_10436_66_1569488117-1.jpeg'
        },

    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content-logo')}>
                    <img src={images.logo} alt="Logo" srcset="" className={cx('logo')} />
                    <div>
                        <span className={cx('text-logo')}>M</span>
                        <span className={cx('text-logo')}>o</span>
                        <span className={cx('text-logo')}>t</span>
                        <span className={cx('text-logo')}>o</span>
                        <span className={cx('text-logo')}>r</span>
                    </div>
                </div>
                <Search />
                <div classNames={cx('actions')} style={{ display: 'flex' }}>
                    <Button className={cx('btn-register')} outline>Register</Button>
                    <Button className={cx('btn-login')} primary>Login</Button>


                    <Tippy
                        interactive
                        visible
                        placement='bottom-end'
                        render={attrs => (
                            <div className={cx('more-list')} tabIndex="-1" {...attrs}>
                                <Wrapper>
                                    <div className={cx('more-wrapper')}>
                                        {
                                            motorItems.map((m, i) => (
                                                <MotorItem
                                                    key={i}
                                                    index={m._id}
                                                    name={m.name}
                                                    price={m.price}
                                                    avatar={m.avatar}
                                                />
                                            ))
                                        }
                                    </div>
                                </Wrapper>
                            </div>
                        )}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Tippy>
                    {/* <More>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </More> */}
                </div>
            </div>

        </header>
    );
}

export default Header;