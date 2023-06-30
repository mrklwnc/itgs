"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [style, setStyle] = useState<string>(
    "invisible transition duration-500 opacity-0"
  );

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setStyle("visibile transition duration-500 opacity-100");
      } else {
        setStyle("invisible transition duration-500 opacity-0");
      }
    };

    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener("scroll", scrollFunction);

    return () => {
      // Cleanup the scroll event listener when the component is unmounted
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge
  };

  return (
    <button
      onClick={topFunction}
      className={`fixed bottom-5 right-5 z-10 px-5 py-6 rounded-full bg-mrk-shipcove bg-opacity-70 ${style} transition duration-300 hover:bg-black hover:bg-opacity-50`}
    >
      <Image
        src="/itgs/elements/icons/arrow.svg"
        alt="back to top"
        width={25}
        height={0}
        className="-rotate-90"
      />
    </button>
  );
};

export default BackToTop;
