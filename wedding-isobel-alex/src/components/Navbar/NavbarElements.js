import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #FFF4F2;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 10;

@media screen and (max-width:960px){
  transition: 0.8s all ease;
}
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index:1;
  width: 100%;
  padding:0 24px;
  max-width: 1100px;

`;

export const NavLogo=styled(LinkR)`
color: #769293;
justify-self: flex-start;
cursor: pointer;
font-size: 1.2rem;
display: flex;
align-items: center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
font-family: 'Playfair Display', serif;
`;
  
export const MobileIcon =styled.div`

  display:none; 

  @media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color: #769293;
    &:hover{
      color:#0B3545;}
}

`;

export const NavMenu=styled.ul`
  display:flex;
  align-items:center;
  list-style:none;
  text-align:center;
  margin-right:-22px;

  @media screen and (max-width:768px){
    display:none;

  }
`;

export const NavItem=styled.li`
  height: 80px;
  
`;

export const NavLinks=styled(LinkS)`
  color: #769293;
  height: 100%;
  align-items:center;
  text-decoration: none;
  padding:0 1rem;
  cursor:pointer;
  display: flex;

  &.active{
    border-bottom:5px solid #769293;
  }
  &:hover{
    color:#0B3545;}
`;


