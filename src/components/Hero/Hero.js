import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  // Function to handle the resume button click
  const handleResumeClick = () => {
    // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual link to your resume
    const resumeLink = 'https://drive.google.com/file/d/1cwwWnFFVSzWEPijGasJXC9_6Q6MFGor4/view?usp=sharing';
    window.open(resumeLink, '_blank');
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hi there! I'm Yash Wani <br />
            Computer Science Engineering Student
          </SectionTitle>
          <SectionText>
            Step into my digital space where I share my exciting journey in Development and Engineering.
          </SectionText>
          <Button onClick={handleResumeClick}>Resume</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
