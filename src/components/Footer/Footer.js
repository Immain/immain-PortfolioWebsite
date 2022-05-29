import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href="tel:805-350-6058">
            (805) 350-6058
          </LinkItem>  
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            E-Mail:
          </LinkTitle>
          <LinkItem href="mailto:ian.mitchell.main@gmail.com">
            ian.mitchell.main@gmail.com
          </LinkItem>  
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Reflect Differently | Coded By Ian Main Using React <FaReact size="1.6rem" /></Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Immain">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/immain/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/EmulationNerd">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
