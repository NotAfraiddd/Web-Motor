import Tippy from "@tippyjs/react/headless";
import { Wrapper as ProperWrapper } from '../index'
import classNames from 'classnames/bind';
import styles from './More.module.scss';
import MoreItem from "./MoreItem";
import MoreHeader from "./MoreHeader";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFunc = () => { }

function More({ children, items = [], onChange = defaultFunc }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]


    const renderItems = () => {
        return current.data.map((item, index) => {
            // !! convert sang boolean
            const isParent = !!item.children
            return <MoreItem key={index} data={item} onClick={() => {
                // nếu là Parent thì nó mới đẩy lên cấp 2,
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                }
                else {
                    onChange(item)
                }
            }} />
        });
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
                            {history.length > 1 && <MoreHeader title='Language'
                                // func onBack
                                onBack={() => {
                                    setHistory(prev => prev.slice(0, prev.length - 1))
                                }} />}
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