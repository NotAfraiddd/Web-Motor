import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './More.module.scss';
const cx = classNames.bind(styles);
function MoreItem({ data, onClick }) {
    return (
        <Button className={cx('more-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MoreItem;