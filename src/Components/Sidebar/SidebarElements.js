import styled from "styled-components";
// import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const SidebarContainer=styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items:center;
    top: 0;
    transition: 0.3s ease-in-out;
    right:${({isOpen}) => (isOpen? '0' : '-1000px')} ;

    @media screen and (max-width:400px){
        width: 100%;
    }

`

export const CloseIcon=styled(FaTimes)`
    color: #000;
`

export const Icon=styled.div`
    position: absolute;
    top:1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu=styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;

    @media screen and (max-width:4801px){
        grid-template-rows: repeat(4,60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0ms.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover{
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarRoute=styled(LinkR)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
`

