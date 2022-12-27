import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as ProperWrapper } from '../Proper';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1])
        }, 3000)
    }, [])

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <ProperWrapper>
                        <div className={cx('search-title')}>Account</div>
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