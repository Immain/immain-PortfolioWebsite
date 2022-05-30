import React from 'react';
import { DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import {SiGooglecloud, SiPaloaltosoftware, SiAnsible, SiAffinitydesigner, SiFirebase, SiRedux, SiWindows } from 'react-icons/si';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience working with the following technologies:
    </SectionText>
    <List>
      <ListItem>
        <SiRedux size="3rem" />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Next.js, Recoil, Redux, and Redux-Saga 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, MySQL, MongoDB, and MariaDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAffinitydesigner size="3rem" />
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            Experience with <br /> 
            tools like Figma, Sketch, XD, and Proto
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiGooglecloud size="3rem" />
        <ListContainer>
          <ListTitle>
            Cloud Technologies
          </ListTitle>
          <ListParagraph>
            Experience with <br /> 
            cloud services like Firebase, AWS, Azure, Digital Ocean, Google Cloud
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPaloaltosoftware size="3rem" />
        <ListContainer>
          <ListTitle>
            Software
          </ListTitle>
          <ListParagraph>
            Experience with <br /> 
            Adobe Creative Suite, Microsoft Office, Google Workspace, PowerBI, WordPress, and VMware
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAnsible size="3rem" />
        <ListContainer>
          <ListTitle>
            Automation
          </ListTitle>
          <ListParagraph>
            Experience with <br /> 
            Ansible, Jenkins, Terraform, Python, Powershell, and Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiWindows size="3rem" />
        <ListContainer>
          <ListTitle>
            Operating Systems
          </ListTitle>
          <ListParagraph>
            Experience with <br /> 
            MacOS, Windows, Linux (Ubuntu, CentOS, Alpine, Alma), and UNIX
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
