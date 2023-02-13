import styled from 'styled-components';
import React from 'react';
import images from '~/assets/images';

const StyledSection = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    overflow: hidden;
    display: flex;
    margin: 0 auto;
`;

const StyledTitle = styled.div`
    font-size: 10em;
    font-family: 'Kaushan Script';
    font-weight: 300;
    position: absolute;
    top: 1rem;
    left: 2%;
    z-index: 1;
`;

const StyledLeft = styled.div`
    width: 50%;
    position: relative;
    font-weight: 300;
    font-size: large;
    z-index: 1;
    margin-top: 20%;
`;
const StyledRight = styled.div`
    width: 50%;
    position: relative;
    margin-top: 10%;
    .img-1 {
        position: absolute;
        width: 80%;
        height: auto;
        left: 0%;
        box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
        border-radius: 10px;
    }
    .img-2 {
        position: absolute;
        width: 50%;
        height: auto;
        top: 14%;
        left: 44%;
        box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
        border-radius: 10px;
    }
    .img-3 {
        position: absolute;
        width: 50%;
        height: auto;
        top: 48%;
        left: -26%;
        box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
        border-radius: 10px;
    }
`;
function About() {
    return (
        <StyledSection id="stick" className="about">
            <StyledTitle
                data-scroll
                data-scroll-speed="-2"
                data-scroll-direction="horizontal"
            >
                About us
            </StyledTitle>
            <StyledLeft
                data-scroll
                data-scroll-sticky
                data-scroll-target="#stick"
                // lam cho chu chay cheo len phia tren
            >
                Motoride specialize in premium guided motorcycle Community in
                Vietnam. Join the Community and ride with us to explore the
                beauty of Vietnam with Motoride
            </StyledLeft>
            <StyledRight>
                <img src={images.IMG1} alt="" className="img-1" />
                <img
                    data-scroll
                    data-scroll-speed="8"
                    src={images.view1}
                    alt=""
                    className="img-2"
                />
                <img
                    data-scroll
                    data-scroll-speed="-2"
                    src={images.view2}
                    alt=""
                    className="img-3"
                />
            </StyledRight>
        </StyledSection>
    );
}

export default About;
