import React from "react";
import { motion } from "framer-motion";
import ClaraAnimation from "../../assets/animations/ClaraAnimation";
import { Box, SubBox, Text } from "./styles";

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Clara Mendes.</h3>
          <h6>
            I'm a computer science student and I like to code with React and
            Ruby on Rails.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <ClaraAnimation />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
