import { useState, useEffect } from "react";
export const useViewport = () => {
  const [windowWidth, setWindownWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleWindowWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindownWidth(width);
    };
    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);
  return [windowWidth];
};
