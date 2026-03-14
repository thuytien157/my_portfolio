import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 35, stiffness: 500 }; 
  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [dotX, dotY]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#4fd1c5] rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${mousePos.x - 1.5}px, ${mousePos.y - 1.5}px, 0)`,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-[#4fd1c5]/60 rounded-full pointer-events-none z-[9998]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}