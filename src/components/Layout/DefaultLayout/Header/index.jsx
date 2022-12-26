import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={images.logo} alt="Logo" srcset="" className={cx('logo')} />
                    <div>
                        <span className={cx('text-logo')}>M</span>
                        <span className={cx('text-logo')}>o</span>
                        <span className={cx('text-logo')}>t</span>
                        <span className={cx('text-logo')}>o</span>
                        <span className={cx('text-logo')}>r</span>
                    </div>
                </div>

            </div>

        </header>
    );
}

export default Header;