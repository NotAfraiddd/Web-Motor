import Tippy from "@tippyjs/react/headless";
import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './More.module.scss';

const cx = classNames.bind(styles);

function More({ children }) {
    return (
        <Tippy
            visible
            render={attrs => (
                <div className={cx('more-list')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <div className={cx('more-wrapper')}>{children}</div>
                    </Wrapper>
                </div>
            )}>
        </Tippy>
    );
}

export default More;