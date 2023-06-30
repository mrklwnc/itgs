"use client";

import { useState, useEffect } from "react";

const useScroll = () => {
  const isClient = typeof window === "object";
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    if (!isClient) {
      return;
    }

    console.log(scrollDirection);

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const currentScrollX = window.pageXOffset;

      setScrollDirection((prevDirection) => {
        if (currentScrollY > scrollY && prevDirection !== "down") {
          return "down";
        }
        if (currentScrollY < scrollY && prevDirection !== "up") {
          return "up";
        }
        return prevDirection;
      });

      setScrollY(currentScrollY);
      setScrollX(currentScrollX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient, scrollY]);

  return { scrollY, scrollX, scrollDirection };
};

export default useScroll;
