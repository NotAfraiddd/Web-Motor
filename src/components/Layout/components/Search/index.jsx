import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as ProperWrapper } from '../Proper';
import MotorItem from '~/components/MotorItem';

const cx = classNames.bind(styles);

const motorItems = [
    {
        _id: '1',
        name: 'Superbike BMW S1000RR Superbike BMW S1000RR Superbike BMW S1000RR',
        price: '$2000',
        avatar: 'https://autopro8.mediacdn.vn/2020/8/19/bmw-s1000rr-2-1597795333957285219652.jpg'
    },
    {
        _id: '2',
        name: 'Superbike BMW S1000RR',
        price: '$2000',
        avatar: 'https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2022/03/proevekoert-2020-yamaha-yzf-r1-amp-yzf-r1m-paa-jerez-img-2400_10436_66_1569488117-1.jpeg'
    },
    {
        _id: '2',
        name: 'Superbike BMW S1000RR',
        price: '$2000',
        avatar: 'https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2022/03/proevekoert-2020-yamaha-yzf-r1-amp-yzf-r1m-paa-jerez-img-2400_10436_66_1569488117-1.jpeg'
    },
    {
        _id: '2',
        name: 'Superbike BMW S1000RR',
        price: '$2000',
        avatar: 'https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2022/03/proevekoert-2020-yamaha-yzf-r1-amp-yzf-r1m-paa-jerez-img-2400_10436_66_1569488117-1.jpeg'
    },

]

function Search() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1])
        }, 1000)
    }, [])

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-results')} tabIndex="1" {...attrs}>
                    <ProperWrapper className={cx('proper-wrapper')}>
                        <div className={cx('search-title')}>Somethings</div>
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
                    </ProperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input className={cx('input-text')} type="text" spellCheck={false} placeholder="Search something you need..." />
                {/* clear */}
                <button className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} /></button>
                {/* loading */}
                <button className={cx('loading')}><FontAwesomeIcon icon={faSpinner} /></button>
                <button className={cx('btn-search')}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
        </HeadlessTippy>);
}

export default Search;