import classNames from 'classnames/bind';
import Menu from '~/components/Menu';
import CoverVideo from '~/components/Video';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <Menu />
            <CoverVideo />
        </section>
    );
}

export default Home;
