import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
const cx = classNames.bind(styles);
function Logo() {
    const pathVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: { duration: 2, ease: 'easeInOut' },
        },
    };
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: -5,
            transition: { duration: 2, delay: 2, ease: 'easeInOut' },
        },
    };
    return (
        <div className={cx('container')}>
            <Link to={'/'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="48px"
                    viewBox="0 0 24 24"
                    width="48px"
                    fill="#000"
                    className="logo"
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
                <motion.h3
                    variants={textVariants}
                    initial={'hidden'}
                    animate={'visible'}
                    className={cx('text-logo')}
                >
                    motor studio
                </motion.h3>
            </Link>
        </div>
    );
}

export default Logo;
