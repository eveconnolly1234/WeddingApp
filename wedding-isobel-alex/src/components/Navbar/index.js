import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
  
        <NavBarContainer>
          <NavLogo to='/'>Isobel and Alex's Wedding</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
             </NavItem>
             <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="reservation">Reservations</NavLinks>
            </NavItem>

          </NavMenu>

 </NavBarContainer>
        
      </Nav>
    </>
  );
};
  
export default Navbar;