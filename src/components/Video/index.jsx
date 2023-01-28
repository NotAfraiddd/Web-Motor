import classNames from 'classnames/bind';
import styles from './CoverVideo.module.scss';

import MainVideo from '~/assets/video/motor.mp4';
const cx = classNames.bind(styles);

function CoverVideo() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('dark-overlay')}></div>
            <div className={cx('title')}>
                <div className={cx('content-title')}>
                    <h1
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.13"
                        data-scroll-speed="4"
                    >
                        M
                    </h1>
                    <h1
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.1"
                        data-scroll-speed="4"
                    >
                        o
                    </h1>
                    <h1
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.07"
                        data-scroll-speed="4"
                    >
                        t
                    </h1>
                    <h1
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.04"
                        data-scroll-speed="4"
                    >
                        o
                    </h1>
                    <h1
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.01"
                        data-scroll-speed="4"
                    >
                        r
                    </h1>
                </div>
                <h2
                    className={cx('text2-title')}
                    data-scroll
                    data-scroll-speed="2"
                    data-scroll-delay="0.04"
                >
                    your dream your choice
                </h2>
            </div>
            <video
                className={cx('video')}
                src={MainVideo}
                typeof="video/mp4"
                autoPlay
                muted
                loop
            />
        </section>
    );
}

export default CoverVideo;
