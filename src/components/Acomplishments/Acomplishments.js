import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 36, text: 'Github Repositories' },
  { number: 3, text: 'College Accolades', },
  { number: 4, text: 'Websites Developed', },
  { number: 10, text: 'Automation Scripts Written', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

  </Section>

);

export default Acomplishments;
