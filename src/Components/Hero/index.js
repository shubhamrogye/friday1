import React,{useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer,HeroH1,HeroContent,HeroItems,HeroP,HeroBtn} from './HeroElements'


const Hero = () => {
const [isOpen,setIsOpen] =useState(false)

const toggle=() => {
    setIsOpen(!isOpen)
}
    return (
        <>
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Subliminals Production</HeroH1>
                    <HeroP>Here to bring colours</HeroP>
                    <HeroBtn to='potrait' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Get started</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
        
      </>
    )
}

export default Hero
