import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function SideBar() {
    return (<aside className={cx('wrapper')}>
        <FontAwesomeIcon icon={faCalendar}/>
        <h2>Side bar</h2>
    </aside>);
}

export default SideBar;