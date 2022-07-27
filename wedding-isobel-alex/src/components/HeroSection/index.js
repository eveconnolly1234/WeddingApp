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
                    Isobel & Alex
                </HeroH1>
                <HeroP>28th May 2023</HeroP>
                <HeroBtnWrapper>
                    <Button to='reservation' 
                    onMouseEnter={onHover} 
                    primary='true' dark='true'>Reserve your Accom {hover ? <ArrowForward />:<ArrowRight />}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection; 