import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Join, JoinText, IconContainer } from './AcomplishmentsStyles';

const ClosingRemarks = () => (
  <Section>
    <SectionTitle>Closing Remarks</SectionTitle>
    <Boxes>
      <Box>
        <BoxText>
          Thank you for visiting my portfolio and taking the time to explore my journey and projects. If you have any questions, opportunities, or just want to connect, feel free to reach out. I look forward to future collaborations and learning experiences.
        </BoxText>
      </Box>
    </Boxes>
    <SectionDivider />
    <Join>
      <JoinText>
        Interested in collaborating or discussing a project?
      </JoinText>
      <IconContainer>
        {/* Add your contact icons or buttons here */}
      </IconContainer>
    </Join>
  </Section>
);

export default ClosingRemarks;