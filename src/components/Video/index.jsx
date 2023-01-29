import classNames from 'classnames/bind';
import styles from './CoverVideo.module.scss';

import MainVideo from '~/assets/video/motor.mp4';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);

function CoverVideo() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 2, delay: 2, ease: 'easeInOut' },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
        },
    };
    return (
        <section className={cx('wrapper')}>
            <div className={cx('dark-overlay')}></div>
            <motion.div
                className={cx('title')}
                variants={container}
                initial="hidden"
                animate="show"
            >
                <div className={cx('content-title')} va>
                    <motion.h1
                        variants={item}
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.13"
                        data-scroll-speed="4"
                    >
                        M
                    </motion.h1>
                    <motion.h1
                        variants={item}
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.1"
                        data-scroll-speed="4"
                    >
                        o
                    </motion.h1>
                    <motion.h1
                        variants={item}
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.07"
                        data-scroll-speed="4"
                    >
                        t
                    </motion.h1>
                    <motion.h1
                        variants={item}
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.04"
                        data-scroll-speed="4"
                    >
                        o
                    </motion.h1>
                    <motion.h1
                        variants={item}
                        className={cx('text1-title')}
                        data-scroll
                        data-scroll-delay="0.01"
                        data-scroll-speed="4"
                    >
                        r
                    </motion.h1>
                </div>
                <h2
                    className={cx('text2-title')}
                    data-scroll
                    data-scroll-speed="2"
                    data-scroll-delay="0.04"
                >
                    your dream your choice
                </h2>
            </motion.div>
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
