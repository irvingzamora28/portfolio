import React from 'react'
import tw from 'twin.macro'

const FooterContainer = tw.div`
    w-full
    h-96
    bg-dark-blue-500
    flex
    flex-col
    mt-10
    lg:mt-36
    pt-6
    px-2
    lg:pt-24
    lg:px-16
    text-white
    justify-center
    items-center
`;

const Wrapper = tw.div`
    flex
    w-full
    justify-center
    lg:justify-start
`;

const InnerContainer = tw.div`
    flex
    flex-col
    flex-wrap
    w-full
    lg:flex-row
    pt-16
    lg:pt-9
    justify-between
    lg:justify-start
    h-full
`;

const LeftInnerContainer = tw.div`
    flex
    flex[5]
    w-full
    h-full
    justify-between
    lg:justify-start
`;

const RightInnerContainer = tw.div`
    flex
    flex-col
    lg:flex-row
    flex[1]
    w-full
    h-full
    mb-5
    lg:mb-0
    flex-wrap
`;

const Footer = () => {
    return <FooterContainer>
        <Wrapper>
            <InnerContainer>
                <LeftInnerContainer>
                    Menu
                </LeftInnerContainer>
                <RightInnerContainer>
                    Right
                </RightInnerContainer>
            </InnerContainer>
        </Wrapper>
    </FooterContainer>
}

export default Footer
