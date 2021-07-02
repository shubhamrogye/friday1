import React from 'react'
import {SidebarContainer,SidebarLink,Icon,CloseIcon,SidebarMenu} from './SidebarElements'
// import {HashLink as Link} from 'react-router-hash-link'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                
                <SidebarLink to="potrait"  smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Potraits</SidebarLink>
                <SidebarLink to="Videos" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Videos</SidebarLink>
                <SidebarLink to="lightpaint" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Light Painting</SidebarLink>
                <SidebarLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Contact Us</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
