import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';
  
const Navbar = ({ toggle }) => {

const toggleHome=()=>{
scroll.scrollToTop();
};


  return (
    <>
      <Nav>
  
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>28th May 2023</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
              to='about'
              //react smooth scroll
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
            >About</NavLinks>
             </NavItem>
             <NavItem>
              <NavLinks to='venue'
              //react smooth scroll
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              >Venue</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to='contact'
              //react smooth scroll
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
             >Contact</NavLinks>
            </NavItem>

          </NavMenu>

 </NavBarContainer>
        
      </Nav>
    </>
  );
};
  
export default Navbar;