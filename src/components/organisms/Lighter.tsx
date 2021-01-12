import React, { useEffect, useState } from "react";
import { useSpring, config } from "react-spring";
import { Light } from "../../ui/atoms";
import { theme } from "../../theme";

export function Lighter() {
  const lightAnim = useAnimateLight();

  return <Light style={lightAnim} />;
}

function useAnimateLight() {
  const [isScrolledHalf, setIsScrolledHalf] = useState(false);
  const lightAnim = useSpring({
    config: config.slow,
    reset: isScrolledHalf,
    reverse: !isScrolledHalf,
    to: {
      background: theme.colors.lighterColors.blue,
    },
    from: {
      background: theme.colors.lighterColors.white,
    },
  });

  const listenColorChange = () => {
    // When scrolled half of the page - change color of lighter
    const scrollHalf = document.body.scrollHeight / 2 <= window.scrollY;
    return scrollHalf ? setIsScrolledHalf(true) : setIsScrolledHalf(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenColorChange);
    return () => window.removeEventListener("scroll", listenColorChange);
  }, []);

  return lightAnim;
}
