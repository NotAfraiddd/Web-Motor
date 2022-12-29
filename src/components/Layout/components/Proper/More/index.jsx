import Tippy from "@tippyjs/react/headless";
import { Wrapper as ProperWrapper } from '../index'
import classNames from 'classnames/bind';
import styles from './More.module.scss';
import MoreItem from "./MoreItem";

const cx = classNames.bind(styles);

function More({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MoreItem
                key={index}
                data={item}
            />
        ))
    }
    return (
        <Tippy
            interactive
            delay={[0, 500]}
            visible
            placement='bottom-end'
            render={attrs => (
                <div className={cx('more-list')} tabIndex="-1" {...attrs}>
                    <ProperWrapper>
                        <div className={cx('more-wrapper')}>
                            {renderItems()}
                        </div>
                    </ProperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    );
}

export default More;