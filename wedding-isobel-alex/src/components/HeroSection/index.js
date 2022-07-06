import React, {useState} from 'react';
import { HeroContainer, HeroBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement'


const HeroSection = ()=> {

    const [hover,setHover] = useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBG>
               
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    Isobel and Alex's Wedding
                </HeroH1>
                <HeroP>RSVP today!</HeroP>
                <HeroBtnWrapper>
                    <Button to='reservation' onMouseEnter={onHover} onMouseExit={onHover}>Reserve your Accom {hover ? <ArrowForward />:<ArrowRight/>}</Button>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection; 