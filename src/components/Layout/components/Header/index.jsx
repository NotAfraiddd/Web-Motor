
import React, { useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
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
                <div classNames={cx('actions')} style={{display:'flex'}}>
                    <Button className={cx('btn-register')}>Register</Button>
                    <Button className={cx('btn-login')}>Login</Button>
                </div>
            </div>

        </header>
    );
}

export default Header;