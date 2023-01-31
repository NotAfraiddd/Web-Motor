import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './Loading.module.scss';
const cx = classNames.bind(styles);

function Loading() {
    const pathVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: { duration: 2, ease: 'easeInOut' },
        },
    };
    const textVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                yoyo: Infinity,
                ease: 'easeInOut',
            },
        },
    };
    return (
        <div
            className={cx('container')}
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="#fff"
                className={cx('logo-loading')}
            >
                <g></g>
                <g>
                    <motion.path
                        variants={pathVariants}
                        initial={'hidden'}
                        animate={'visible'}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    />
                </g>
            </svg>
            <motion.span
                variants={textVariants}
                initial={'hidden'}
                animate={'visible'}
                className={cx('text-logo-loading')}
            >
                motor studio
            </motion.span>
        </div>
    );
}

export default Loading;
