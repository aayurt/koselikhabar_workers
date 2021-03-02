import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function ParallaxItem({ children, className, style }:any) {
  const [elementTop, setElementTop] = useState<any>(0)
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });
  useLayoutEffect(() => {
    const element = ref?.current;
    setElementTop(element?.["offsetTop"])
  }, [ref]);
  return (
    <div ref={ref} className="image-container">
      <motion.div className="overlay" style={{ ...style, y }}>
        {children}
      </motion.div>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "red",
        }}
      ></div>
      {/* <img src={src} alt="" /> */}
    </div>
  );
}
