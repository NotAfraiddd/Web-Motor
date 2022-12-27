import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (<HeadlessTippy
        render={attrs => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                <div className={cx('search-title')}>Account</div>
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