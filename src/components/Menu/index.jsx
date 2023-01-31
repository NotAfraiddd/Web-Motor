import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function Menu() {
    const [click, setClick] = useState(false);

    const StyledNavContainter = styled(motion.div)`
        top: ${(props) => (props.click ? '0' : `-80px`)};
        transition: all 0.1s linear;
    `;
    return (
        <StyledNavContainter
            className={cx('nav-container')}
            click={click}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.ul
                className={cx('menu')}
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                }}
                dragElastic={0.05}
                dragSnapToOrigin
            >
                <li className={cx('menu-btn')} onClick={() => setClick(!click)}>
                    <span>Menu</span>
                </li>
                <Link to={'/'}>
                    <motion.li
                        className={cx('menu-items')}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        <span>Home</span>
                    </motion.li>
                </Link>
                <Link to={'/about'}>
                    <motion.li
                        className={cx('menu-items')}
                        // dung de hover hieu ung
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        <span>About</span>
                    </motion.li>
                </Link>
                <Link to={'/product'}>
                    <motion.li
                        className={cx('menu-items')}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        <span>Shop</span>
                    </motion.li>
                </Link>
                <Link to={'/contact'}>
                    <motion.li
                        className={cx('menu-items')}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        <span>Contact</span>
                    </motion.li>
                </Link>
                <Link to={'/gallery'}>
                    <motion.li
                        className={cx('menu-items')}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        <span>Gallery</span>
                    </motion.li>
                </Link>
            </motion.ul>
        </StyledNavContainter>
    );
}

export default Menu;
