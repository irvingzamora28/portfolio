import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import styled from 'styled-components'
import tw from 'twin.macro';
import Logo from '../Logo';
import { deviceSize } from '../Responsive';
import menuStyles from './menuStyles';

const NavbarContainer = styled.div`
    width: 90%;
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `};
`;

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    lg:ml-20
    flex
    justify-center
    items-center
`;

const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-white
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-300
    box-content
    mb-2
    lg:mb-0
`;

const Navbar = () => {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    const navItems = <NavItems>
        <NavItem>
            <Link to="Home">Home</Link>
        </NavItem>
        <NavItem>
            <Link to="Explore">Explore</Link>
        </NavItem>
        <NavItem>
            <Link to="Notes">Notes</Link>
        </NavItem>
    </NavItems>

    return <NavbarContainer>
        <Logo></Logo>
        {isMobile &&
            <Menu right styles={menuStyles}>
                {navItems}
            </Menu>
        }
        {!isMobile && navItems}
    </NavbarContainer>
}

export default Navbar
