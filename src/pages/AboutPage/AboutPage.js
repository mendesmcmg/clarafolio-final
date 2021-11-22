import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../../components/Themes";

import LogoComponent from "../../components/LogoComponent";
import SocialIcons from "../../components/SocialIcons";
import PowerButton from "../../components/PowerButton";
import ParticleComponent from "../../components/ParticleComponent";
import BigTitle from "../../components/BigTitle";
import clara from "../../assets/Images/clara.jpeg";
import { Box, Spaceman, Main } from "./styles";

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={clara} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a web developer located in Brazil. I am currently working at Ribon
          App, a startup focused on enabling donations to NGOs.
          <br /> <br />
          I started to study computer science in 2019 and focused a lot on
          front-end development so far, with React.js being my main framework of
          choice. In spite of that, I also have great interest in back-end
          development, especially with Ruby on Rails.
          <br /> <br />I love to read and watch movies, and right now I'm
          learning more about algorithms, data structures and good practices.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
