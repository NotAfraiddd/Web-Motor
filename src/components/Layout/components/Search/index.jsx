import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as ProperWrapper } from '../Proper';
import MotorItem from '~/components/MotorItem';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { resultSearchsShow } from '~/contain/selector';
import searchSlice from './searchSlice';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [searchShowResult, setSearchShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setSearchResult([1]);
            setLoading(false);
        }, 1000);
    }, []);

    const handleClearSearchText = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setSearchShowResult(false);
    };

    const displayResultShow = useSelector(resultSearchsShow);
    const dispatch = useDispatch();

    const handleFilterSearch = (data) => {
        setSearchValue(data.target.value);
        dispatch(searchSlice.actions.searchSomeThing(data.target.value));
    };
    return (
        <HeadlessTippy
            interactive
            visible={searchShowResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="1" {...attrs}>
                    <ProperWrapper className={cx('proper-wrapper')}>
                        <div className={cx('search-title')}>Somethings</div>
                        {displayResultShow.map((item) => (
                            <MotorItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                avatar={item.avatar}
                            />
                        ))}
                    </ProperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    className={cx('input-text')}
                    type="text"
                    spellCheck={false}
                    placeholder="Search something you need..."
                    value={searchValue}
                    onChange={handleFilterSearch}
                    // có cái này mới tránh bị khi hover vào nó hiện
                    onFocus={() => {
                        setSearchShowResult(true);
                    }}
                />
                {/* clear */}
                {!!searchResult && (
                    <button
                        className={cx('clear')}
                        onClick={handleClearSearchText}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* loading */}
                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                )}
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
