import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = ( ) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Digital Resume and Portfolio
      </SectionTitle>
      <SectionText>
        My Name is Ian Main and I'm a talented Network Administrator with seven solid years of experience in systems and network installation, automation configuration, deployment, and troubleshooting. Experience includes implementing and administering public, private and hybrid cloud platforms (AWS, Azure, Google Cloud, and Digital Ocean). I Possess strong grasp of computer security, multiple operating systems (MacOS, Windows, and Linux), numerous applications, and mixed platforms. I have Excellent communication and collaboration/teamwork skills, and superb customer service/relations abilities. I am a self-starter and I am always willing to learn new skills and technologies. 
      </SectionText>
      <Button onClick={() => window.location = 'https://media-exp1.licdn.com/dms/document/C562DAQHCVBEJzdfvyw/profile-treasury-document-pdf-analyzed/0/1653793637940?e=1654732800&v=beta&t=p3PKEGfHPwgYkOuYch0gRmrIj0hO4NOUPawqbtKSb3o'} >
        Download Resume
      </Button>
    </LeftSection>


  </Section>
);

export default Hero;