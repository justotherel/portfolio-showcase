import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';
import {animateScroll as scroll} from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
ExternalLinks, ExternalsWrap, LinkLogo, WebsiteRights, ExternalIcons, ExternalIconLink, Copyleft } from './FooterElements';

function Footer() {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Link block 1</FooterLinkTitle>
                            <FooterLink to="/something">Link 1</FooterLink>
                            <FooterLink to="/something">Link 2</FooterLink>
                            <FooterLink to="/something">Link 3</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Link block 2</FooterLinkTitle>
                            <FooterLink to="/something">Link 1</FooterLink>
                            <FooterLink to="/something">Link 2</FooterLink>
                            <FooterLink to="/something">Link 3</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <ExternalLinks>
                    <ExternalsWrap>
                        <LinkLogo to='/' onClick={toggleHome}>Justotherel</LinkLogo>
                        <WebsiteRights>Maxim Ushakov <Copyleft>©</Copyleft> {new Date().getFullYear()} All rights reversed</WebsiteRights>
                        <ExternalIcons>
                            <ExternalIconLink href="/" targer="_blank" aria-label="GitHub"><FaGithub /></ExternalIconLink>
                            <ExternalIconLink href="/" targer="_blank" aria-label="Mail"><AiFillMail /></ExternalIconLink>
                        </ExternalIcons>
                    </ExternalsWrap>
                </ExternalLinks>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
