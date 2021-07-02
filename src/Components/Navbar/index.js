import React from 'react'
import {Nav,NavLink,NavIcon,Bars} from './NavbarElements'
import './nav.css'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Subliminals</NavLink>
                <NavIcon onClick={toggle}>
                    
                    <Bars />
                </NavIcon>
            </Nav>
            
        </>
    )
}

export default Navbar
