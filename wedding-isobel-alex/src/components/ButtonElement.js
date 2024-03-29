
import styled from 'styled-components';
import {Link} from 'react-scroll';


export const Button = styled(Link)`
font-family: 'Encode Sans Expanded', sans-serif;
border-radius:50px;
background: ${({ primary }) => (primary ? '#769293' : '#FFF4F2')};
white-space:no-wrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 38px')};
color: ${({ dark }) => (dark? '#010606' : '#769293' )};;
font-size: ${({fontBig}) => (fontBig ? '24px':'16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content: center;
align-items:center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #FFF4F2;
    color:#769293;
}
`