import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledSection = styled(motion.section)`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
`;

const StyledTitle = styled.div`
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
    right: 65%;
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
    width: 65%;
    h1 {
        width: 5rem;
        margin: 0 2rem;
    }
`;

function Shop() {
    return (
        <StyledSection>
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
                    We have a wide selection from the latest car models to
                    various protective clothing such as shoes, helmets. Not only
                    that, we also supply repair materials from many different
                    types of motorcycles.
                </p>
            </StyeldLeft>
            <StyledRight>
                <h1>mg</h1>
                <h1>mg</h1>
                <h1>mg</h1>
                <h1>mg</h1>
                <h1>mg</h1>
                <h1>mg</h1>
                <h1>mg</h1>
            </StyledRight>
        </StyledSection>
    );
}

export default Shop;
