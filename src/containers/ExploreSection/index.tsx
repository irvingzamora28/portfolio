import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import tw from 'twin.macro'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import BaliTempleImage from "../../images/bali-temple.jpg"
import ExoticBromoImage from "../../images/exotic-bromo.jpg"
import HalfOceanImage from "../../images/half-ocean.jpg"
import MaldivesFromTopImage from "../../images/maldives-from-top.jpg"
import MaldivesResortsImage from "../../images/maldives-resorts.jpg"

const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-2xl
    xl:text-3xl
    2xl:text-5xl
    2xl:mt-6
    2xl:mb-6
    text-gray-600
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-4
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
    ${tw`
        flex
        flex-col
    `};
    img {
        ${tw`
            max-w-full
            max-h-full
        `};
    }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

const ExploreSection = () => {
    return <ExploreSectionContainer name="Explore">
        <Title>Explore Travel Places</Title>
        <SectionInfo>
        Lonzo Anderson Ball (born October 27, 1997) is an American professional basketball player for the Chicago Bulls of the National Basketball Association (NBA). A point guard, he played college basketball for one season with the UCLA Bruins, earning consensus first-team All-American honors before the Los Angeles Lakers selected him with the second overall pick of the 2017 NBA draft. He was named to the NBA All-Rookie Second Team in 2018. 
        </SectionInfo>
        <ExploreSectionWrapper>
            <Carousel dynamicHeight={false}>
                <Item>
                    <img src={BaliTempleImage} alt="" />
                    <Description>Bali Temple</Description>
                </Item>
                <Item>
                    <img src={ExoticBromoImage} alt="" />
                    <Description>Exotic Bromo</Description>
                </Item>
                <Item>
                    <img src={HalfOceanImage} alt="" />
                    <Description>Half Ocean</Description>
                </Item>
                <Item>
                    <img src={MaldivesFromTopImage} alt="" />
                    <Description>Maldives From Top</Description>
                </Item>
                <Item>
                    <img src={MaldivesResortsImage} alt="" />
                    <Description>Maldives Resorts</Description>
                </Item>
            </Carousel>
        </ExploreSectionWrapper>
    </ExploreSectionContainer>
}

export default ExploreSection
