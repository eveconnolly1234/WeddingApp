import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer=styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #FFF4F2;
display: grid;
align-items: center;
left: 0;
transition:0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon=styled(FaTimes)`
color: #769293;
&:hover{
    color:#0B3545;
  
}
`;

export const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size: 2rem;
cursor: pointer;
outline:none;
`;

export const SidebarWrapper=styled.div`
color:#fff;
`;

export const SidebarMenu=styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width:480px ){
grid-template-rows: repeat(6,80px);
}
`;

export const SidebarLink=styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
color: #769293;
cursor:pointer;

&:hover{
    color:#0B3545;
    transition:0.2s ease-in-out;
}
`;

