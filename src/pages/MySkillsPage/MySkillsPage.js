import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../components/Themes";
import { Design, Develope } from "../../components/AllSvgs";

import LogoComponent from "../../components/LogoComponent";
import SocialIcons from "../../components/SocialIcons";
import PowerButton from "../../components/PowerButton";
import ParticleComponent from "../../components/ParticleComponent";
import BigTitle from "../../components/BigTitle";
import { Box, Main, Title, Description } from "./styles";

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} fill='#0111638'/> Frontend Developer
          </Title>
          <Description>
            Perhaps my most developed skills so far
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              HTML, CSS, JS, React, Redux, Sass, Firebase, API Context
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Backend Developer
          </Title>
          <Description>
            Still developing my skills in backend
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Ruby, Ruby on Rails, SQL
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>VScode, Insomnia, Command Line</li>
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
