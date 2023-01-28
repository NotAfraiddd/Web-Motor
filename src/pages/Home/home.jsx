import classNames from 'classnames/bind';
import CoverVideo from '~/components/Video';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <CoverVideo />
        </section>
    );
}

export default Home;
