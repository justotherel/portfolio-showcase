import React, {useState, useEffect} from 'react' 
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink  } from './NavbarElemets';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Justotherel</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="block1"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >Block 1</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="block2"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >Block 2</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >Block 3</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="block3"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >Block 4</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/something'>To something</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>    
        </>
    )
}

export default Navbar;
