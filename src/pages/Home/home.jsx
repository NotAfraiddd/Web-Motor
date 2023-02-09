import classNames from 'classnames/bind';
import About from '~/components/About/about';
import Menu from '~/components/Menu';
import Shop from '~/components/Shop';
import CoverVideo from '~/components/Video';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <Menu />
            <CoverVideo />
            <About />
            <Shop />
        </section>
    );
}

export default Home;
