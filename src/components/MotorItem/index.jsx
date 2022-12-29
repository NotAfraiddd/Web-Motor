import { Avatar } from 'antd';
import classNames from 'classnames/bind';
import styles from './MotorItem.module.scss';

const cx = classNames.bind(styles);

function MotorItem({ avatar, name, price }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={avatar} alt="" srcset="" />
            <div className={cx('information')}>
                <div className={cx('name')}>
                    {name}
                </div>
                <div className={cx('price')}>
                    {price}
                </div>
            </div>
        </div>
    );
}

export default MotorItem;