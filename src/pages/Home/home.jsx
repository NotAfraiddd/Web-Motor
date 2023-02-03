import classNames from 'classnames/bind';
import Menu from '~/components/Menu';
import CoverVideo from '~/components/Video';
import About from '../About/about';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <Menu />
            <CoverVideo />
            {/* <About /> */}
        </section>
    );
}

export default Home;
