import styled from 'styled-components';
import ImgBg from '../../images/Boye-Hill-House.jpg';
import {MdKeyboardArrowRight ,MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
background:#0c0c0c
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
position: relative;
z-index:1;
height:94vh;

:before{
    content:'';
    position: absolute:
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
}
`;

export const HeroBG = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left:0;
width:100%;
height:94vh;

overflow: hidden;
background-image: linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)), url(${ImgBg});
background-position: center;
background-repeat: no-repeat;
-o-object-fit:cover;
object-fit:cover;
background-size: cover;
@media-screen and (max-width:1600px) {
    height: 87vh;};
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: relative;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
font-family: 'Playfair Display', serif;
color: #FFF4F2;
font-size:48px;
text-align:center;
margin-top:100px;


@media-screen and (max-width: 768px){
    font-size:40px;
}

@media-screen and (max-width: 480px){
    font-size:32px;
}
`;

export const HeroP = styled.p`
font-family: 'Encode Sans Expanded', sans-serif;
margin-top:24px;
color:#FFF4F2;
font-size:24px;
text-align:center;
max-width:600px;

@media-screen and (max-width: 768px){
    font-size:24px;
};

@media-screen and (max-width: 480px){
    font-size:18px;
};
`;

export const HeroBtnWrapper = styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size: 20px;
`;




