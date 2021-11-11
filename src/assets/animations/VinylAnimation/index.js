import React from "react";
import Lottie from "react-lottie";
import animationData from "./retro-vinyl-player.json";

function VinylAnimation(props) {
  const defaultOptions = {
      loop: true,
      autoplay: props,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	      options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  );
}

export default VinylAnimation;