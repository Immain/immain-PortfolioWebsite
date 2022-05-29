import React from 'react'
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { GiGraduateCap } from 'react-icons/gi';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './/EducationStyles';


const Education = () => (
      <Section id="education">
            <br />
            <SectionTitle>
                Education
            </SectionTitle>
            <SectionText>
            Having recently finished a 3-year Bachelor of Science degree in Cloud Technologies at Full Sail University, I live and breathe information technology, cloud, and particularly app development, and my spare time is used to constantly enhance my IT skill set and gain a solid foundation in the development of cloud applications.
            </SectionText>
            <List>
                <ListItem>
                    <GiGraduateCap size="3rem" />
                    <ListContainer>
                        <ListTitle>
                            Full Sail University
                        </ListTitle>
                        <ListParagraph>
                            2018 - 2021
                            <br />
                            Bachelor of Science in Cloud Technologies
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <GiGraduateCap size="3rem" />
                    <ListContainer>
                        <ListTitle>
                            College Of The Sequoias
                        </ListTitle>
                        <ListParagraph>
                            2012-2014
                            <br />
                            Computer Science Certificate
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <GiGraduateCap size="3rem" />
                    <ListContainer>
                        <ListTitle>
                            Golden West High School
                        </ListTitle>
                        <ListParagraph>
                            2012-2014
                            <br />
                            General Education
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                
            </List>
      </Section>
  );

export default Education