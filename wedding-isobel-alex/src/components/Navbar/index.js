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
  
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
  
        <NavBarContainer>
          <NavLogo to='/'>Isobel and Alex's Wedding</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" onClick={toggle}>About</NavLinks>
             </NavItem>
             <NavItem>
              <NavLinks to="contact" onClick={toggle}>Contact</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="reservation" onClick={toggle}>Reservations</NavLinks>
            </NavItem>

          </NavMenu>

 </NavBarContainer>
        
      </Nav>
    </>
  );
};
  
export default Navbar;