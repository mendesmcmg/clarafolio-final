import React from "react";
import Lottie from "react-lottie";
import animationData from "./clara.json";
import { AnimationContainer } from "./styles";

function ClaraAnimation() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <AnimationContainer>
      <Lottie 
	      options={defaultOptions}
        height={500}
        width={500}
      />
    </AnimationContainer>
  );
}

export default ClaraAnimation;