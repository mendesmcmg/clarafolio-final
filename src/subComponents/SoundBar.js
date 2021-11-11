import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import VinylAnimation from "../assets/animations/VinylAnimation";

import music from "../assets/audio/polonaise.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 0.5rem;
  z-index: 10;
`;

function SoundBar() {
  const ref = useRef(10);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (!click) ref.current.currentTime = 29;
  });

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <Box onClick={() => handleClick()}>
      <VinylAnimation click={click} />

      <audio src={music} ref={ref} loop />
    </Box>
  );
}

export default SoundBar;
