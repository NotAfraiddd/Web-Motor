import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import images from '~/assets/images';

const StyledSection = styled(motion.section)`
    min-height: 100vh;
    height: auto;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
`;

const StyledTitle = styled(motion.h1)`
    font-size: 5em;
    font-family: 'Kaushan Script';
    font-weight: 300;
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 2;
    text-shadow: 1px 1px 1px #000;
    color: #fff;
`;

const StyeldLeft = styled.div`
    width: 35%;
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    z-index: 1;
    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 16px;
        width: 80%;
        margin: 0 auto;
    }
`;

const StyledRight = styled.div`
    position: absolute;
    left: 35%;
    padding-left: 30%;
    background-color: #bebebe;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* width: 65%; */
`;

const Item = styled(motion.div)`
    display: inline-block;
    width: 20rem;
    /* background-color: black; */
    margin-right: 6rem;
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    h1 {
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
`;
const Product = ({ img, title = '' }) => {
    return (
        <Item
            initial={{ filter: 'grayscale(100%)' }}
            whileInView={{ filter: 'grayscale(0%)' }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 'all' }}
        >
            <img width="400px" height="600px" src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    );
};

function Shop() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const Horizontalref = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;

        let scrollingElement = Horizontalref.current;

        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();
        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: `${pinWrapWidth} bottom`,
                    scroller: '.App', //locomotive-scroll
                    scrub: 1,
                    pin: true,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none',
            });

            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: `${pinWrapWidth} bottom`,
                    scroller: '.App', //locomotive-scroll
                    scrub: 1,
                },
                x: -pinWrapWidth,
                ease: 'none',
            });
            ScrollTrigger.refresh();
        }, 1000);
        ScrollTrigger.refresh();

        return () => {
            t1.kill();
            // ScrollTrigger.kill();
        };
    }, []);

    return (
        <StyledSection ref={ref}>
            <StyledTitle data-scroll data-scroll-speed="-1">
                New Collection
            </StyledTitle>
            <StyeldLeft>
                <p>
                    The brand new collection is currently in development in the
                    US. We are trying to introduce our products from many car
                    manufacturers around the world, including imported used car
                    brands, but the safety is strictly tested by us before
                    selling to the market.
                    <br /> <br />
                    We have a wide selementction from the latest car models to
                    various protective clothing such as shoes, helmets. Not only
                    that, we also supply repair materials from many different
                    types of motorcycles.
                </p>
            </StyeldLeft>
            <StyledRight data-scroll ref={Horizontalref}>
                <Product img={images.IMG1} title="anh 1" />
                <Product img={images.IMG2} title="anh 1" />
                <Product img={images.IMG3} title="anh 1" />
                <Product img={images.IMG1} title="anh 1" />
                <Product img={images.IMG1} title="anh 1" />
            </StyledRight>
        </StyledSection>
    );
}

export default Shop;
