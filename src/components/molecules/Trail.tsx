import React, { useState } from "react";
import { animated, useTrail, config } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

interface TrailProps {
  children: React.ReactNode;
}

export function Trail({ children }: TrailProps) {
  const items = React.Children.toArray(children);
  const [isVisible, setIsVisible] = useState(false);
  const trail = useTrail(items.length, {
    config: config.default,
    reset: isVisible,
    reverse: !isVisible,
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.2)" },
  });

  const onVisibilityChange = (visible: boolean) => {
    setIsVisible(visible);
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <>
        {trail.map((style, idx) => (
          <animated.div key={idx} style={style}>
            {items[idx]}
          </animated.div>
        ))}
      </>
    </VisibilitySensor>
  );
}
