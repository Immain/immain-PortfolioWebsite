import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typed from 'react-typed';

const Hero = ( ) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Typed strings={['Welcome To', 'Bienvenido a', 'Ласкаво просимо до', 'में स्वागत', '歡迎來到', 'Тавтай морил', 'أهلا في', 'Dobrodošli u']} typeSpeed={120} backSpeed={130} loop/> <br />
        My Digital Resume and Portfolio
      </SectionTitle>
      <SectionText>
        My Name is Ian Main and I'm a talented Network Administrator with seven solid years of experience in systems and network installation, automation configuration, deployment, and troubleshooting. Experience includes implementing and administering public, private and hybrid cloud platforms (AWS, Azure, Google Cloud, and Digital Ocean). I Possess strong grasp of computer security, multiple operating systems (MacOS, Windows, and Linux), numerous applications, and mixed platforms. I have Excellent communication and collaboration/teamwork skills, and superb customer service/relations abilities. I am a self-starter and I am always willing to learn new skills and technologies. 
      </SectionText>
      <Button onClick={() => window.location = 'https://media-exp1.licdn.com/dms/document/C562DAQF_YqKA9FrLbQ/profile-treasury-document-pdf-analyzed/0/1653873350954?e=1655942400&v=beta&t=CGmHxGawviYzP7dWlV3i9v_8HN1NvG11JV75REVJUTU'} >
        Download Resume
      </Button>
    </LeftSection>


  </Section>
);

export default Hero;
