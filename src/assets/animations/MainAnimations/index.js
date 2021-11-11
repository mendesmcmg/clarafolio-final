import React from "react";
import Lottie from "react-lottie";
import animation1 from "./red-book.json";
import animation2 from "./red-design-animation.json";
import animation3 from "./work-from-home-red-head.json";

function MainAnimation() {
  const animationOptions = [animation1, animation2, animation3];
  const animation = animationOptions[Math.floor(Math.random() * 3)];
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	      options={defaultOptions}
        height={250}
        width={400}
      />
    </div>
  );
}

export default MainAnimation;