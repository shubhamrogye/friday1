import React from 'react'
import { FaInstagram,FaFacebook,FaEnvelope} from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkTitle,FooterLinkItems,FooterLink,
 SoacialMediaWrap,SocialIconLink,SocialIcons,SocialMedia,WebsiteRights,} from './FooterElements'



const Footer = () => {

    

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        
                        
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                       
                        <FooterLinkItems>
                            <FooterLinkTitle id="contact">Contact Us</FooterLinkTitle>
                                <FooterLink >  itssubliminals@gmail.com</FooterLink>
                                <FooterLink >Phone no: 8855060175</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SoacialMediaWrap>
                       
                        <WebsiteRights>Copyright © {new Date().getFullYear()} |
                        All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/sublliminalls/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink  target="_blank" aria-label="Facebook"><FaEnvelope/></SocialIconLink>
                        </SocialIcons>
                    </SoacialMediaWrap>
                </SocialMedia>
            </FooterWrap>           
        </FooterContainer>
    )
}

export default Footer
