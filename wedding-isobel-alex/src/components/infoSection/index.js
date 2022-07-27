import { React, useState } from 'react';
import { ImgWrap, 
    InfoContainer, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    BtnWrap, 
    InfoWrapper, 
    TopLine, 
    Subtitle, 
    Heading,
    Img } from './infoElements';
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';
import { Button } from '../ButtonElement';
 

const InfoSection = ({ lightTextDescription,lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    const [hover,setHover] = useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

    return(
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine darkText={ darkText }>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDescription={lightTextDescription}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home' 
                                onMouseEnter={onHover} 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}


                                primary={ primary ? 1 : 0} //if primary has value of true return 1 for true or 0 for false
                                dark={ dark ? 1 : 0 }
                                dark2={ dark2 ? 1 : 0 }>
                                    {buttonLabel}
                                    {hover ? <ArrowForward />:<ArrowRight />}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
};

export default InfoSection; 