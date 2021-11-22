import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../../components/Themes";

import LogoComponent from "../../components/LogoComponent";
import SocialIcons from "../../components/SocialIcons";
import PowerButton from "../../components/PowerButton";

import { Work } from "../../data/WorkData";
import Card from "../../components/Card";
import MainAnimation from "../../assets/animations/MainAnimations";
import BigTitle from "../../components/BigTitle";
import { Box, Main, container, Rotate } from "./styles";

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <MainAnimation width={110} height={60} fill={DarkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
